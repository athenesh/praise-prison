# 🤖 PROMPT 02: AdSense Integration & Final Checks

**USE THIS AFTER YOUR SITE IS APPROVED BY GOOGLE ADSENSE**

---

## 📋 CONTEXT FOR AI

My website was approved by Google AdSense! Now I need you to:
1. Add the actual AdSense ad code to my site
2. Make final optimizations
3. Help me verify everything works

---

## 🎯 WHAT I HAVE

### My AdSense Details:
- **Publisher ID:** ca-pub-[YOUR NUMBER HERE]
- **Ad Slot ID 1:** [FROM ADSENSE DASHBOARD]
- **Ad Slot ID 2:** [FROM ADSENSE DASHBOARD]
- **Ad Slot ID 3:** [FROM ADSENSE DASHBOARD] (optional)

### Where I Got These:
1. Logged into Google AdSense
2. Went to: Ads → Ad units
3. Created new ad units
4. Copied the slot IDs (they look like numbers: 1234567890)

---

## 📝 WHAT I NEED YOU TO DO

### TASK 1: Create AdBanner Component

Create a reusable AdSense component:

**File: `src/components/AdBanner.tsx`**

Requirements:
- Must use `next/script` for loading
- Must handle different ad formats (auto, rectangle, horizontal)
- Must be responsive
- Must not cause hydration errors
- Must not show placeholder text in production

Example structure:
```tsx
"use client";
import { useEffect } from "react";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal";
  style?: React.CSSProperties;
}

export default function AdBanner({ slot, format = "auto", style }: AdBannerProps) {
  useEffect(() => {
    try {
      // Push ad
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="ad-container my-4" style={{ minHeight: '100px', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXX"  // My Publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
```

**Replace `ca-pub-XXXXXXXXXX` with my actual Publisher ID!**

---

### TASK 2: Add AdSense Script to Layout

Update `src/app/layout.tsx`:

**Add this INSIDE the `<body>` tag (not in `<head>`):**

```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

**Important:**
- Replace `ca-pub-XXXXXXXXXX` with my actual Publisher ID
- Place AFTER `{children}` in the body
- NOT in `<head>` (causes warnings)

---

### TASK 3: Add Ads to Homepage

Update `src/app/page.tsx`:

**Add ads in these locations:**

1. **After main content, before SEO section:**
```tsx
{/* Ad Placement 1 - Below main service */}
<AdBanner slot="YOUR_SLOT_ID_1" format="horizontal" />
```

2. **In the middle of SEO content:**
```tsx
{/* Ad Placement 2 - Within content */}
<AdBanner slot="YOUR_SLOT_ID_2" format="rectangle" />
```

3. **At the bottom, after everything:**
```tsx
{/* Ad Placement 3 - Footer area */}
<AdBanner slot="YOUR_SLOT_ID_3" format="auto" />
```

**Rules for ad placement:**
- Max 3 ads per page initially (can add more later)
- Don't put ads in header or navigation
- Don't put ads between title and main content
- Space them out naturally
- Make sure they don't block important content

---

### TASK 4: Update Environment Variables

**Remind me to add this in Vercel:**

Go to: Vercel Dashboard → Project → Settings → Environment Variables

Add:
- **Key:** `NEXT_PUBLIC_ADSENSE_PUB_ID`
- **Value:** `ca-pub-XXXXXXXXXX` (my Publisher ID)
- **Environments:** Production, Preview, Development (select all)

Then redeploy.

---

### TASK 5: Verify No Errors

Check these files and fix any issues:

1. **AdBanner component:**
   - [ ] No TypeScript errors
   - [ ] Proper TypeScript types
   - [ ] useEffect is used correctly
   - [ ] No hydration warnings

2. **Layout.tsx:**
   - [ ] Script is in `<body>`, not `<head>`
   - [ ] Publisher ID is correct
   - [ ] No duplicate scripts

3. **Homepage:**
   - [ ] AdBanner is imported correctly
   - [ ] Slot IDs are correct
   - [ ] Ads are spaced out naturally

---

## ⚠️ CRITICAL: ADSENSE RULES

### DO NOT:
- ❌ Place ads in popups or overlays
- ❌ Hide ads (visibility: hidden)
- ❌ Modify the ad code from Google
- ❌ Click your own ads (instant ban!)
- ❌ Encourage users to click ads ("Click here!", "Support us by clicking")
- ❌ Place ads on:
  - Login/register pages
  - Thank you pages
  - Error pages (404, 500)
  - Pages with no content
  - Behind paywalls

### DO:
- ✅ Place ads on content-rich pages
- ✅ Space ads naturally
- ✅ Make sure content is visible above ads
- ✅ Keep ad code exactly as Google provides
- ✅ Test on mobile (ads should be responsive)

---

## 🎨 AD STYLING (OPTIONAL)

You can add a wrapper for better styling:

```tsx
<div className="ad-wrapper max-w-4xl mx-auto my-8 flex justify-center">
  <AdBanner slot="123456" format="auto" />
</div>
```

**Style guidelines:**
- Center ads on page
- Add margin around ads (my-8, my-6)
- Max width to prevent ads from being too wide
- Make sure ads are visible but not intrusive

---

## 📊 TESTING CHECKLIST

After you add the ad code, help me verify:

### On Desktop:
- [ ] Visit homepage
- [ ] Open DevTools (F12) → Console
- [ ] Refresh page
- [ ] Check for errors (red text)
- [ ] Wait 30 seconds - do ads appear?
- [ ] No "adsbygoogle.push() error" messages

### On Mobile:
- [ ] Visit site on phone
- [ ] Ads should be responsive (fit screen)
- [ ] Ads don't break layout
- [ ] Content is still readable

### Expected Timeline:
- **First 1-2 hours:** Blank ad spaces (normal)
- **After 2-6 hours:** Google placeholder ads appear
- **After 24-48 hours:** Real ads start showing
- **After 1 week:** Full ad inventory available

---

## 🐛 TROUBLESHOOTING

### If ads don't show after 48 hours:

**Check 1: Publisher ID is correct**
```tsx
// Should be your real ID:
data-ad-client="ca-pub-7379075324068520"

// Not placeholder:
data-ad-client="ca-pub-XXXXXXXXXX"
```

**Check 2: Slot IDs are correct**
```tsx
// Should be real numbers from AdSense:
<AdBanner slot="1234567890" />

// Not test IDs:
<AdBanner slot="test-slot" />
```

**Check 3: Script is loading**
- Open DevTools → Network tab
- Filter: "adsbygoogle"
- Should see: `adsbygoogle.js` loaded (status 200)

**Check 4: No console errors**
- Common error: "adsbygoogle.push() error"
- Solution: Make sure script loads before ads render
- Use `strategy="afterInteractive"` in Script tag

**Check 5: Ad density**
- Max 3 ads per page initially
- If you have 4+, Google might not fill them all

---

## 📈 OPTIMIZATION TIPS

### After ads are working:

**Week 1-2:**
- Monitor AdSense dashboard daily
- Check: Impressions, Clicks, RPM (revenue per 1000 impressions)
- Don't make changes yet (let data accumulate)

**Week 3-4:**
- Analyze which ad positions perform best
- Consider moving underperforming ads
- Test different ad formats

**Month 2+:**
- Slowly add more ads (1 at a time)
- Test ad placement variations
- Monitor impact on user experience

**Best practices:**
- Keep ads above 50% of page length
- Space ads every 3-4 paragraphs in long content
- Use "In-article" ads for better performance
- Avoid too many ads (hurts user experience)

---

## 🎯 DELIVERABLES

Please provide:

1. **Updated AdBanner.tsx** (complete code)
2. **Updated layout.tsx** (with Script tag)
3. **Updated page.tsx** (with 3 ad placements)
4. **Instructions for me:**
   - What to add in Vercel environment variables
   - How to verify ads are working
   - What to expect in first 48 hours

---

## ✅ START NOW

Please implement the AdSense integration as specified above. Use these details:

- **My Publisher ID:** [I WILL PROVIDE]
- **My Slot IDs:**
  - Slot 1 (Horizontal): [I WILL PROVIDE]
  - Slot 2 (Rectangle): [I WILL PROVIDE]  
  - Slot 3 (Auto): [I WILL PROVIDE]

Create the AdBanner component and update the necessary files. Make sure:
- No TypeScript errors
- Script loads correctly
- Ads are placed naturally
- Mobile responsive
- No violations of AdSense policies

**Begin!**
