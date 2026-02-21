# 🚀 Deployment Guide - Praise Prison (AdSense Ready)

**Last Updated:** February 21, 2026  
**Status:** Ready to Deploy

---

## 📋 Quick Deployment Checklist

Follow these steps to deploy your AdSense-ready site:

---

## Step 1: Verify Local Changes

First, make sure all changes are working locally:

```bash
cd /Users/seolhwaoh/Desktop/trae/dday

# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Test locally
npm run start
```

**Verify these URLs work locally:**
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/privacy-policy
- http://localhost:3000/contact

---

## Step 2: Check All Files

Make sure these files exist and are correct:

```bash
# Essential pages
✅ src/app/about/page.tsx
✅ src/app/privacy-policy/page.tsx
✅ src/app/contact/page.tsx

# Configuration files
✅ public/robots.txt
✅ public/ads.txt

# Enhanced components
✅ src/components/SEOContent.tsx
✅ src/app/layout.tsx (updated metadata)
✅ src/app/page.tsx (ads commented out, footer added)

# Documentation
✅ ADSENSE_APPROVAL_CHECKLIST.md
✅ CHANGES_MADE.md
✅ ADSENSE_TROUBLESHOOTING.md
✅ DEPLOY_GUIDE.md (this file)
```

---

## Step 3: Commit Changes to Git

```bash
cd /Users/seolhwaoh/Desktop/trae/dday

# Check what files changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "feat: Prepare site for AdSense approval

- Add Privacy Policy page with AdSense disclosure
- Add About Us page (2000+ words)
- Add Contact page with multiple email addresses
- Enhance SEO content (5700+ total words)
- Remove placeholder ad slots (critical fix)
- Add footer navigation with essential page links
- Improve metadata and SEO in layout
- Fix 'screens without publisher-content' rejection

Fixes #AdSense-Rejection-5"

# Push to GitHub (triggers Vercel deployment)
git push origin main
```

---

## Step 4: Wait for Vercel Deployment

If your project is connected to Vercel:

1. **Automatic Deployment:** Vercel will detect your git push and start building
2. **Check Vercel Dashboard:** https://vercel.com/dashboard
3. **Monitor Build:** Wait for "Building" → "Ready" (usually 1-3 minutes)
4. **Get Production URL:** Copy your production URL (e.g., `praiseprison.vercel.app`)

---

## Step 5: Verify Production Deployment

Once deployed, test these URLs in production:

```
✅ https://yourdomain.com/
✅ https://yourdomain.com/about
✅ https://yourdomain.com/privacy-policy
✅ https://yourdomain.com/contact
✅ https://yourdomain.com/robots.txt
✅ https://yourdomain.com/ads.txt
```

**Check on Multiple Devices:**
- [ ] Desktop (Chrome, Safari, Firefox)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet

**Verify These Elements:**
- [ ] Footer navigation works on all pages
- [ ] All text is readable and properly formatted
- [ ] No broken links
- [ ] No console errors (press F12 → Console)
- [ ] Page loads in < 3 seconds

---

## Step 6: Google Search Console (Optional but Recommended)

Help Google find and index your new pages:

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Select your property
3. Go to "URL Inspection"
4. Request indexing for:
   - `yourdomain.com/`
   - `yourdomain.com/about`
   - `yourdomain.com/privacy-policy`
   - `yourdomain.com/contact`

This speeds up Google's awareness of your new content.

---

## Step 7: Wait Before Reapplying

⏰ **IMPORTANT:** Do NOT reapply immediately!

**Recommended Timeline:**
- **Minimum:** 2 weeks from last rejection
- **Optimal:** 3-4 weeks
- **Safe:** 1 month

**Why Wait?**
- Google penalizes rapid reapplications
- Gives time for crawler to re-index your site
- Shows patience and seriousness
- Higher approval rate

**What to Do While Waiting:**
- Drive some organic traffic (share on social media)
- Monitor Google Analytics (if installed)
- Ensure no 404 errors or broken links
- Keep content quality high

---

## Step 8: Apply for AdSense

When ready (after waiting period):

1. **Go to:** https://www.google.com/adsense/
2. **Sign in** with your Google account
3. **Dashboard → Sites**
4. **Click "Request Review"** (if showing "Not Ready")
5. **Or:** Add your site if it's not already there

**Application Form:**
- **URL:** Your full domain (e.g., `https://praiseprison.com`)
- **Content language:** Korean (한국어)
- **I have read and agree to AdSense policies:** ✅ Check this
- **Submit**

**Wait Time:** 1-3 weeks for Google's review

---

## Step 9: After Approval ✅

**When you get the approval email:**

1. **Go to AdSense Dashboard** → Ads → Ad units
2. **Create 2 new ad units:**
   - **Ad unit 1:** "Prison Mode Ad" (Format: Display)
   - **Ad unit 2:** "Heaven Mode Ad" (Format: In-article or Display)
3. **Copy the ad slot IDs** (they look like `1234567890` but with real numbers)

4. **Update your code:**

```tsx
// In /src/app/page.tsx

// Find these commented lines (around line 282):
{/* AdSense Banner - Temporarily disabled until approval */}
{/* <AdBanner slot="1234567890" format="rectangle" /> */}

// Replace with:
<AdBanner slot="YOUR_REAL_SLOT_ID_1" format="rectangle" />

// Find the second commented ad (around line 611):
{/* AdSense Banner - Temporarily disabled until approval */}
{/* <AdBanner slot="0987654321" /> */}

// Replace with:
<AdBanner slot="YOUR_REAL_SLOT_ID_2" />
```

5. **Commit and Deploy:**

```bash
git add src/app/page.tsx
git commit -m "feat: Add approved AdSense ad units"
git push origin main
```

6. **Wait 24-48 hours** for ads to start showing
7. **Monitor AdSense Dashboard** for impressions and revenue

---

## 🚨 Common Deployment Issues

### Issue 1: Build Fails

**Error:** `next: command not found`

**Fix:**
```bash
npm install
npm run build
```

### Issue 2: 404 on New Pages

**Check:**
- Are files in correct location? (`src/app/about/page.tsx`)
- Did you commit and push all files?
- Did Vercel build succeed?

**Fix:**
```bash
git status           # Check uncommitted files
git add .
git commit -m "fix: Add missing pages"
git push
```

### Issue 3: Styles Not Loading

**Check:**
- Is `globals.css` still in place?
- Are Tailwind classes correct?

**Fix:** Clear browser cache and hard refresh (Cmd+Shift+R)

### Issue 4: Ads.txt Not Found

**Error:** `yourdomain.com/ads.txt` returns 404

**Check:**
- Is file at `public/ads.txt`?
- Did you redeploy after adding it?

**Fix:**
```bash
# Verify file exists
ls -la public/ads.txt

# If missing, create it:
echo "google.com, pub-7379075324068520, DIRECT, f08c47fec0942fa0" > public/ads.txt

# Commit and push
git add public/ads.txt
git commit -m "fix: Add ads.txt for AdSense verification"
git push
```

---

## 📊 Deployment Verification Checklist

Before applying for AdSense, verify:

### Technical
- [ ] Site loads on HTTPS
- [ ] All pages return 200 status (not 404)
- [ ] Mobile responsive design works
- [ ] No JavaScript console errors
- [ ] Page load time < 3 seconds
- [ ] robots.txt accessible
- [ ] ads.txt accessible

### Content
- [ ] Privacy Policy mentions Google AdSense
- [ ] About page has 2000+ words
- [ ] Contact page has valid email addresses
- [ ] Main page has 1000+ words of content
- [ ] No placeholder ad slots active
- [ ] Footer navigation works

### SEO
- [ ] Page titles are descriptive
- [ ] Meta descriptions present
- [ ] Internal links work
- [ ] No broken external links
- [ ] Open Graph tags present

---

## 🎯 Success Metrics

**After deployment, you should see:**
- ✅ 4 pages live and accessible
- ✅ 5,700+ words of content indexed
- ✅ Clean build with no errors
- ✅ Mobile-friendly (test on Google's Mobile-Friendly Test)
- ✅ Fast load times
- ✅ Professional appearance

---

## 📞 Need Help?

If you encounter issues:

1. **Check documentation:**
   - `/ADSENSE_APPROVAL_CHECKLIST.md`
   - `/ADSENSE_TROUBLESHOOTING.md`
   - `/CHANGES_MADE.md`

2. **Common resources:**
   - [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
   - [Vercel Support](https://vercel.com/support)
   - [Google AdSense Help](https://support.google.com/adsense/)

3. **Check build logs:**
   - Vercel Dashboard → Your Project → Deployments → Latest → View Logs

---

## 🎉 Final Words

You've done the hard work! Now:

1. ✅ **Deploy** with confidence
2. ⏰ **Wait** the proper time (2-4 weeks)
3. 📝 **Apply** for AdSense
4. 🤞 **Wait** for approval (1-3 weeks)
5. 💰 **Monetize** your site!

**Good luck!** 🚀

Your site is now **professionally structured**, **content-rich**, and **AdSense-ready**. The changes we made directly address the rejection reason and significantly improve your chances.

---

**Created:** February 21, 2026  
**For:** Praise Prison (긍정 교화소)  
**Version:** 1.0 (Production Ready)
