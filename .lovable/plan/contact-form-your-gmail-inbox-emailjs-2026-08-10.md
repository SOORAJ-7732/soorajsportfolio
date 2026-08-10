# Contact form → your Gmail inbox (EmailJS)

You've provided EmailJS credentials, so the contact form will send through EmailJS instead of Formspree. Right now the form only shows a fake success toast after 0.7s — nothing is sent.

Your credentials (all public/browser-safe, so they go directly in the code):
- Service ID: `service_l227156`
- Template ID: `template_jkdzfq6`
- Public Key: `T7pg3pnHbjHr97zYC`

## What I'll build

- Install the official `@emailjs/browser` SDK and wire the contact form to send a real email to your Gmail on submit.
- Validation before sending: required fields, valid email format, length limits (name 100, subject 150, message 1000) with inline error messages.
- Honeypot field to silently absorb bot spam.
- Real states: button shows "Sending…" while in flight, success toast only after EmailJS confirms, and an error toast with a "email me directly" fallback link if it fails.
- Form resets only on confirmed success.
- No layout or styling changes — the form keeps its current soft-card look.

## One thing to check on your side

Your EmailJS template must use variable names matching what the form sends: `name`, `email`, `subject`, `message`. Also set the template's Reply-To to `{{email}}` so replying in Gmail goes straight back to the visitor. Free tier is 200 emails/month.

## Technical notes

- Send via `emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey })` from the client; no backend, no Cloud, no secrets needed (the public key is designed to be exposed).
- Validation with a small zod schema so checks and messages stay in one place.
- Changes confined to `src/routes/index.tsx` (contact form section) plus the new dependency.
