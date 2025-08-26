<script type="module" id="app-js">
// Simple E2EE helpers using Web Crypto API


export async function deriveKeyFromPassphrase(passphrase, roomId) {
const enc = new TextEncoder();
const salt = enc.encode('salt:' + roomId);
const baseKey = await crypto.subtle.importKey('raw', enc.encode(passphrase), 'PBKDF2', false, ['deriveKey']);
return crypto.subtle.deriveKey(
{ name: 'PBKDF2', salt, iterations: 150_000, hash: 'SHA-256' },
baseKey,
{ name: 'AES-GCM', length: 256 },
false,
['encrypt', 'decrypt']
);
}


export async function encryptText(key, text) {
const iv = crypto.getRandomValues(new Uint8Array(12));
const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(text));
return { iv, ciphertext: new Uint8Array(ciphertext) };
}


export async function decryptText(key, ivBuf, cipherBuf) {
const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(ivBuf) }, key, new Uint8Array(cipherBuf));
return new TextDecoder().decode(pt);
}


export function bufToBase64(buf) {
let binary = '';
const bytes = new Uint8Array(buf);
const len = bytes.byteLength;
for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
return btoa(binary);
}


export function base64ToBuf(b64) {
const binary = atob(b64);
const len = binary.length;
const bytes = new Uint8Array(len);
for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
return bytes;
}
</script>
