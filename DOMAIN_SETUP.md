# Connecting fullaiengineer.com to Vercel

This guide will help you connect your IONOS domain `fullaiengineer.com` to your existing Vercel deployment.

## Prerequisites

- Domain `fullaiengineer.com` registered with IONOS
- Portfolio already deployed on Vercel
- Access to IONOS domain management panel
- Access to Vercel project dashboard

## Step 1: Add Domain in Vercel

1. **Go to Vercel Dashboard**
   - Navigate to https://vercel.com/dashboard
   - Select your portfolio project

2. **Add Custom Domain**
   - Click on "Settings" tab
   - Click on "Domains" in the sidebar
   - Click "Add" or type your domain
   - Enter: `fullaiengineer.com`
   - Click "Add"

3. **Add WWW Subdomain** (Recommended)
   - Also add: `www.fullaiengineer.com`
   - This ensures both versions work

4. **Note the DNS Records**
   - Vercel will show you the DNS records to configure
   - Keep this page open for reference

## Step 2: Configure DNS in IONOS

1. **Log into IONOS**
   - Go to https://www.ionos.com/
   - Log in to your account
   - Navigate to "Domains & SSL"

2. **Select Your Domain**
   - Click on `fullaiengineer.com`
   - Go to "DNS Settings" or "Manage DNS"

3. **Configure DNS Records**

   **For the root domain (@):**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 76.76.21.21
   TTL: 3600 (or Auto)
   ```

   **For the www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (or Auto)
   ```

   > **Note**: If Vercel shows different IP addresses or values, use those instead!

4. **Remove Conflicting Records** (Important!)
   - Delete any existing A or CNAME records for @ and www
   - Keep only the new Vercel DNS records
   - Don't delete MX records (email) if you have any

5. **Save Changes**
   - Click "Save" or "Apply Changes"

## Step 3: Verify Domain in Vercel

1. **Back to Vercel Dashboard**
   - Return to your Vercel project → Settings → Domains

2. **Check Domain Status**
   - You should see your domain with a status indicator
   - Initial status may show "Invalid Configuration"
   - This is normal during DNS propagation

3. **Wait for DNS Propagation**
   - Typically takes 10-60 minutes
   - Can take up to 24-48 hours in rare cases
   - Vercel will automatically verify once DNS propagates

4. **Verify SSL Certificate**
   - Once verified, Vercel automatically provisions SSL
   - Your site will be available at `https://fullaiengineer.com`
   - Certificate is free and auto-renews

## Step 4: Configure Domain Settings (Optional)

### Set Primary Domain

In Vercel Domains settings, you can choose which domain is primary:
- Option 1: `fullaiengineer.com` (naked domain)
- Option 2: `www.fullaiengineer.com` (with www)

The non-primary will automatically redirect to the primary.

**Recommended**: Set `fullaiengineer.com` as primary (cleaner URL)

### Git Branch Configuration

Ensure your domain points to the correct branch:
- Production: `main` branch → `fullaiengineer.com`
- Preview: Other branches get automatic preview URLs

## Step 5: Test Your Domain

Once DNS has propagated, test these:

1. **Check Domain Access**
   - Visit https://fullaiengineer.com
   - Visit https://www.fullaiengineer.com
   - Both should load your portfolio

2. **Verify SSL Certificate**
   - Look for padlock icon in browser
   - Click padlock → should show valid certificate
   - Certificate issuer: Let's Encrypt (via Vercel)

3. **Test Redirects**
   - HTTP should redirect to HTTPS
   - www should redirect to non-www (or vice versa)

4. **Check All Pages/Sections**
   - Navigate through all sections
   - Verify images load
   - Check project links work

## Troubleshooting

### Domain shows "Invalid Configuration"

**Cause**: DNS not propagated yet or incorrect DNS records

**Solution**:
1. Wait longer (DNS can take time)
2. Verify DNS records match Vercel's requirements
3. Use https://dnschecker.org to check propagation
4. Check for typos in DNS records

### "This domain is not registered with Vercel"

**Cause**: Domain not added in Vercel dashboard

**Solution**:
1. Go to Vercel → Project → Settings → Domains
2. Add the domain again

### SSL Certificate Error

**Cause**: SSL provisioning in progress

**Solution**:
1. Wait 5-10 minutes after DNS verification
2. Vercel auto-provisions SSL certificates
3. If persists after 1 hour, contact Vercel support

### Old site still showing

**Cause**: Browser cache or DNS cache

**Solution**:
1. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Try incognito/private browsing
4. Try different browser or device
5. Flush DNS cache:
   ```bash
   # Windows
   ipconfig /flushdns

   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

   # Linux
   sudo systemd-resolve --flush-caches
   ```

### Can't access IONOS DNS settings

**Solution**:
1. Contact IONOS support
2. They can help configure DNS records
3. Or transfer domain to Vercel DNS (see below)

## Alternative: Transfer DNS to Vercel (Advanced)

Instead of managing DNS at IONOS, you can transfer DNS management to Vercel:

1. **In Vercel**: Settings → Domains → Use Vercel DNS
2. **Get Nameservers**: Vercel provides nameserver addresses
3. **In IONOS**: Update nameservers to Vercel's nameservers
4. **Benefit**: Easier management, all in one place

## DNS Propagation Checker Tools

Check if your DNS changes have propagated globally:
- https://dnschecker.org
- https://www.whatsmydns.net
- `dig fullaiengineer.com` (command line)
- `nslookup fullaiengineer.com` (command line)

## Quick Reference: DNS Records

| Type | Name | Value | Purpose |
|------|------|-------|---------|
| A | @ | 76.76.21.21 | Root domain |
| CNAME | www | cname.vercel-dns.com | WWW subdomain |

> **Important**: Always verify the exact values shown in your Vercel dashboard, as they may differ!

## Next Steps After Domain is Live

- [ ] Update social media links to new domain
- [ ] Update GitHub profile/README with new domain
- [ ] Update LinkedIn profile URL
- [ ] Add domain to Google Search Console
- [ ] Submit sitemap to Google: `https://fullaiengineer.com/sitemap.xml`
- [ ] Test site on mobile devices
- [ ] Share your new domain!

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs/concepts/projects/domains
- **Vercel Support**: https://vercel.com/support
- **IONOS Support**: https://www.ionos.com/help
- **DNS Propagation**: Usually 10-60 minutes, max 48 hours

---

**Domain**: fullaiengineer.com
**Hosting**: Vercel
**DNS Provider**: IONOS
**Last Updated**: 2026-09-14

## Summary

1. Add domain in Vercel dashboard
2. Configure A and CNAME records in IONOS DNS
3. Wait for DNS propagation (10-60 min)
4. Vercel auto-provisions SSL
5. Your site is live at https://fullaiengineer.com

**Good luck with your deployment! 🚀**
