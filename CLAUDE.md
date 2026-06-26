# Project: [CLIENT NAME]

## Stack
- Framework: Next.js App Router (TypeScript)
- Styling: Tailwind CSS
- Database: Supabase
- Email: Resend (verified domain: send.apexflowservices.com)
- Hosting: Vercel
- DNS: Netlify

## Environment Variables (names only — never paste values)
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- RESEND_API_KEY

## Non-Negotiable Rules
- Never use any in TypeScript
- App Router only — never Pages Router
- Mobile-first — responsive before desktop styles
- nextjs-pro implements the ui-designer design spec exactly — no visual decisions of its own

## Critical Lessons (Never Skip These)
- Supabase RLS policy alone does NOT grant INSERT. Add explicit GRANT INSERT ON table TO anon, authenticated;
- Vercel env vars: no leading/trailing whitespace. Confirm the variable NAME exactly matches the code (RESEND_API_KEY, not RESEND_KEY_API).
- Resend sending domain is the send. SUBDOMAIN (send.apexflowservices.com), NOT the root. Root shows "Not Started" and will not send.
- Resend needs THREE DNS records in Netlify to verify:
  1. TXT — Name: resend._domainkey.send — Value: long DKIM p=MIGfMA... string
  2. TXT — Name: send.send — Value: v=spf1 include:amazonses.com ~all
  3. MX  — Name: send.send — Value: feedback-smtp...amazonses.com — Priority 10
- Netlify Name field: enter ONLY the part before the domain. Netlify auto-appends .apexflowservices.com. Never include the full domain, never start with @ (both cause a 400 "correct the Domain field" error).
- Set Record type to TXT/MX BEFORE pasting the value (default "A" rejects non-IP values).
- Resend API key must be in the SAME account where the domain is verified, or you get a 403 even with correct DNS.
- create-next-app OVERWRITES CLAUDE.md on scaffold. After scaffolding, copy your real CLAUDE.md back into the project root.

## Design Spec
[Paste the ui-designer output here after it runs]

## Known Blockers / Placeholders
[Client-pending items: pricing, logo, copy, real photos/video]
