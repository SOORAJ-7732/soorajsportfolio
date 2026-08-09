# Contact form → your Gmail inbox (Formspree)

Right now the contact form only shows a success toast after a fake 0.7s delay — nothing is actually sent. This connects it to Formspree so every submission arrives in your Gmail.

## What you'll do (one-time, ~2 minutes)

1. Sign up free at formspree.io using your Gmail address.
2. Create a new form (e.g. "Portfolio Contact"). Submissions get emailed to that Gmail address.
3. Copy the form endpoint, which looks like `https://formspree.io/f/xxxxxxx`.
4. Paste that endpoint back to me and I'll drop it into the site.

Free tier: 50 submissions/month, spam filtering, and a dashboard with submission history.

## What I'll build

- Real submission: the form posts Name, Email, Subject and Message to your Formspree endpoint.
- Validation before sending: required fields, valid email format, and length limits (name 100, subject 150, message 1000 chars) with inline error messages.
- Honeypot field to silently absorb bot spam.
- Reply-to set to the visitor's email, so replying in Gmail goes straight back to them.
- Real states: button shows "Sending…" while in flight, a success toast only after Formspree confirms, and an error toast with a fallback "email me directly" link if the request fails.
- Form resets only on a confirmed success.

## Technical notes

- The endpoint is a public, submit-only URL, so it lives in `src/routes/index.tsx` (or a small `ContactForm` component) as a constant — no backend, no Lovable Cloud, no secrets needed.
- Request: `POST` with `Content-Type: application/json` and `Accept: application/json`, body `{ name, email, subject, message, _replyto }`.
- Validation with a small zod schema so client-side checks and error messages stay in one place.
- No other sections or styling change; the form keeps its current soft-card look.
