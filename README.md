# Ahmed ⇄ Xeo — Private Chat (GitHub Pages + Firebase)

This repository contains a minimal two‑person chat application with end‑to‑end encryption (shared passphrase), backed by Firebase and designed to be served statically from GitHub Pages.  It is intended for just two users, "Ahmed" and "Xeo".  Follow the steps below to get up and running.

## Features

- **Static web app** (HTML/CSS/JS) — no server required.
- **Firebase Auth** (email/password) — restricted to two users via security rules.
- **Firestore** — stores messages in real time.
- **End‑to‑end encryption** — all messages are encrypted in the browser with a shared passphrase.

## 1. Create a Firebase project

1. Visit <https://console.firebase.google.com> and click **Add project**.
2. Give your project a name, e.g. `ahmed-xeo-chat`, and disable Google Analytics unless you need it.
3. Under **Project settings → General → Your apps**, register a **Web** app.  Note the generated config values (API key, auth domain, project ID, etc.) and paste them into `firebase-config.js`.
4. In **Build → Authentication → Sign-in method**, enable **Email/Password** and click Save.
5. Under **Authentication → Users**, click **Add user** twice to create accounts for Ahmed and Xeo.  Use any email/password pair you like.  After creating each user, copy their UID — you’ll need these when editing `firestore.rules`.
6. In **Build → Firestore Database**, click **Create database**, choose **Start in production mode**, select your region, and click **Enable**.

## 2. Configure Firestore security rules

Open **Firestore → Rules**, replace the placeholders `UID_OF_AHMED` and `UID_OF_XEO` in `firestore.rules` with the actual UIDs of your two users, and then click **Publish**.

If you want to lock the chat to a single room (e.g. `ahmed-xeo`), change the wildcard `/rooms/{roomId}` to `/rooms/ahmed-xeo` in the rules file.  Make sure the `room` query parameter in your URL matches.

## 3. Deploy to GitHub Pages

1. Create a new repository on GitHub and upload the files `index.html`, `styles.css`, `app.js`, `firebase-config.js`, and `firestore.rules`.
2. Commit and push to `main`.
3. In your repository settings, go to **Pages → Build and deployment**, select **Deploy from a branch**, choose `main` and the root folder (`/`).  Save.
4. Your site will be hosted at `https://<your-username>.github.io/<repo-name>/` once the build completes.

## 4. First run

1. Open your Pages URL in a browser.
2. Sign in with one of the two email/password pairs you created.
3. Enter a **display name** (Ahmed or Xeo) and agree on a **room passphrase** with your partner.  The passphrase is never sent to the server; it derives a symmetric encryption key in the browser.
4. Share the page URL with `?room=ahmed-xeo` (or whatever room name you choose).
5. Click **Copy invite link** to copy the exact room URL to your clipboard.

## 5. End‑to‑end encryption details

The passphrase is combined with the room ID and fed into PBKDF2 to derive a 256‑bit AES‑GCM key.  Each message is encrypted in the browser before being stored in Firestore, along with a random initialization vector (IV).  Only the passphrase can decrypt the ciphertext.  Changing the passphrase will cause decryption failures for old messages, so pick a memorable secret and stick with it.

## 6. Troubleshooting

- If messages show “Decryption failed”, ensure both users typed the same passphrase and room name.
- If sign‑in fails, verify that Email/Password authentication is enabled and that the accounts exist in Firebase Auth.
- If the site won’t load on GitHub Pages, confirm that all file paths are relative and that GitHub Pages is enabled for the repository.
- Add your GitHub Pages domain (e.g. `<your-username>.github.io`) to **Authentication → Settings → Authorized domains** in Firebase so that the login screen can call Firebase Auth.

## 7. Optional hardening

- Remove any sign‑up UI from the app so that only existing users can sign in.
- Use **App Check** to protect your Firebase resources from unauthorized use.
- Rotate your API key or passphrase periodically for added security.
