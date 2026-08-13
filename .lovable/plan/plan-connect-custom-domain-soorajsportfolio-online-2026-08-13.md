# Plan: Connect custom domain soorajsportfolio.online

## Goal
Replace the current Lovable subdomain (`soorajsportfolio.lovable.app`) with the custom domain `soorajsportfolio.online` so the published portfolio is reachable at `https://soorajsportfolio.online`.

## What changes
No code changes. Domain configuration is done through the Lovable UI, not the codebase. This plan describes the steps you perform in the product.

## Steps

### 1. Open the Domains settings
- Go to **Project Settings → Project section → Domains** (or open the **Publish** dialog and click **Add custom domain**).

### 2. Add the domain
- Click **Connect Domain** (if you already own it at a registrar) or **Buy new domain** (if you want Lovable to register it for you).
- Enter `soorajsportfolio.online`.

### 3. Add DNS records at your registrar
If you are connecting a domain you already own, add these records where you manage DNS:

```text
Type  Name   Value
A     @      185.158.133.1
A     www    185.158.133.1
TXT   _lovable  lovable_verify=<verify-value-shown-in-Lovable>
```

Notes:
- Add both the root (`@`) and `www` as separate entries in Lovable.
- If you use Cloudflare or a similar proxy, enable **"Domain uses Cloudflare or a similar proxy"** in the Advanced section during setup — this switches to CNAME-based verification.
- Remove any conflicting A records for the same host from previous providers.
- If you bought the domain through Lovable, DNS records are managed automatically (and editable later via ⋯ → Configure → Manage DNS records).

### 4. Set the primary domain
- Once `soorajsportfolio.online` is **Active**, set it as the **Primary** domain so `www.soorajsportfolio.online` and the old `soorajsportfolio.lovable.app` redirect to it.

### 5. Wait for propagation
- DNS propagation can take up to 72 hours (usually faster). Lovable automatically provisions SSL/https once verification succeeds.
- Use [dnschecker.org](https://dnschecker.org) to confirm the A records resolve to `185.158.133.1`.

## Current state
- Published URL: `https://soorajsportfolio.lovable.app` (already published)
- Custom domain: none connected yet
- The project is already published, so the custom-domain flow is available immediately.

## If something fails
- SSL fails after 72 hours: re-check the A records point exactly to `185.158.133.1`, remove conflicting records, and ensure any CAA records allow Let's Encrypt.
- "Action required" status: click **Complete Setup** to resume the connect flow.
- "Offline" after being Active: DNS changed — fix it at your registrar to match the shown records.
