# 🤖 AI Coding Guide for Google AdSense Sites

**For Non-Programmers Using: Claude, Cursor, Trae, Chad, or any AI Coding Assistant**

---

## 🎯 Overview

This guide helps you build **Google AdSense-approved websites** using AI coding assistants, even if you're not a programmer. Just copy-paste the prompts, fill in your details, and let AI do the coding!

---

## 📋 What You Need Before Starting

### 1. Your Project Details
Write these down before you start:

```
Service Name: _______________________________
(Example: "Daily Motivation App", "Recipe Finder", "Study Timer")

Service Description: _______________________________
(One sentence: What does your site do?)

Target Audience: _______________________________
(Who uses it? Students? Workers? Parents?)

Main Features: _______________________________
(List 3-5 key features)

Your Email: _______________________________
(Real email for contact pages)

Desired Domain: _______________________________
(Example: "myapp.vercel.app")
```

### 2. Choose Your AI Tool

Pick ONE of these:
- **Cursor** (Best for beginners, visual interface)
- **Claude Code** (Great for detailed explanations)
- **Trae** (Fast iterations)
- **Chad** (Good for quick projects)
- **GitHub Copilot** (If you have VS Code)

All work the same way with these prompts!

---

## 🚀 Step-by-Step Process

### **PHASE 1: Initial Setup (Day 1)**

#### Step 1: Open Your AI Coding Assistant

Example for Cursor:
1. Open Cursor
2. Click "New Project"
3. Name it (your service name)
4. Click "Chat" or "AI Assistant"

#### Step 2: Fill in Your Details

Open `PROMPT_01_INITIAL_SETUP.md` and find this section:
```
### My Project Details:
- **Service Name:** [YOUR SERVICE NAME HERE]
- **Service Description:** [BRIEF DESCRIPTION]
- **Target Audience:** [WHO USES IT]
- **Main Features:** [KEY FEATURES]
- **Contact Email:** [YOUR EMAIL]
- **Domain:** [YOUR DOMAIN]
```

Replace ALL the `[YOUR ... HERE]` parts with your actual information:
```
### My Project Details:
- **Service Name:** Daily Motivation App
- **Service Description:** A tool that sends users daily motivational quotes
- **Target Audience:** Students, workers, anyone needing daily inspiration
- **Main Features:** Random quotes, save favorites, share on social media
- **Contact Email:** john@gmail.com
- **Domain:** daily-motivation.vercel.app
```

#### Step 3: Copy & Paste

1. Copy the **ENTIRE** `PROMPT_01_INITIAL_SETUP.md` file (after filling in your details)
2. Paste it into your AI assistant's chat
3. Press Enter
4. Wait for AI to generate all the code (2-5 minutes)

#### Step 4: Verify What AI Created

AI should create these files:
```
✓ src/app/layout.tsx
✓ src/app/page.tsx (your homepage)
✓ src/app/about/page.tsx
✓ src/app/privacy-policy/page.tsx
✓ src/app/contact/page.tsx
✓ src/components/SEOContent.tsx
✓ public/robots.txt
✓ public/ads.txt (you'll need to add your Publisher ID later)
```

#### Step 5: Check Word Count

Ask AI:
```
Please count the total words across all pages and confirm it's 5,000+
```

If less than 5,000 words, ask:
```
Please expand the content on [page name] to reach at least [target] words while keeping it natural and informative.
```

---

### **PHASE 2: Local Testing (Day 1)**

#### Step 1: Run Development Server

In your AI tool's terminal, type:
```bash
npm install
npm run dev
```

#### Step 2: Open Browser

Visit: `http://localhost:3000`

#### Step 3: Test Every Page

Click through:
- ✓ Homepage loads
- ✓ About page loads (check word count looks long)
- ✓ Privacy Policy loads (search for "Google AdSense" with Ctrl+F)
- ✓ Contact page loads (verify your email is shown)
- ✓ Footer links work on all pages

#### Step 4: Test Mobile View

In browser:
- Press F12
- Click phone icon (or Ctrl+Shift+M)
- Check iPhone and Android views
- Make sure everything is readable

---

### **PHASE 3: Deployment (Day 1)**

#### Step 1: Push to GitHub

Ask your AI:
```
Please help me push this code to GitHub. My GitHub username is [YOUR_USERNAME] and I want to name the repo [YOUR_REPO_NAME].
```

AI will generate git commands like:
```bash
git init
git add .
git commit -m "Initial commit - AdSense ready site"
git branch -M main
git remote add origin https://github.com/[USERNAME]/[REPO].git
git push -u origin main
```

Just copy-paste each line into terminal.

#### Step 2: Deploy to Vercel

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. Wait 2-3 minutes
7. Get your URL: `your-project.vercel.app`

#### Step 3: Verify Live Site

Visit your Vercel URL and test:
- ✓ All pages load
- ✓ No errors (press F12 → Console)
- ✓ Mobile works
- ✓ All links work

---

### **PHASE 4: Final Touches (Day 1-2)**

#### Update ads.txt

1. Go to Google AdSense
2. Find your Publisher ID (looks like: `ca-pub-1234567890`)
3. Ask AI:

```
Please update public/ads.txt with my Publisher ID: ca-pub-1234567890
```

4. Push update:
```bash
git add public/ads.txt
git commit -m "Add AdSense Publisher ID"
git push
```

5. Vercel auto-deploys (wait 1 minute)

#### Verify ads.txt Works

Visit: `your-site.vercel.app/ads.txt`

Should show:
```
google.com, pub-1234567890, DIRECT, f08c47fec0942fa0
```

---

### **PHASE 5: Wait Period (2-4 Weeks)**

**DO NOT apply for AdSense yet!**

During this time:

#### Week 1-2: Let Google Discover Your Site

1. **Submit to Google Search Console:**
   - Go to: https://search.google.com/search-console/
   - Add your site
   - Request indexing for all pages

2. **Drive Some Traffic:**
   - Share on social media
   - Ask friends to visit
   - Post in relevant communities
   - Goal: 50-100 visitors before applying

3. **Monitor for Errors:**
   - Check site daily
   - Look for broken links
   - Fix any issues immediately

#### Week 3-4: Prepare Application

1. **Final Check:**
   - Open `ADSENSE_APPROVAL_CHECKLIST.md`
   - Go through EVERY item
   - Fix anything that's not ✓

2. **Set Application Date:**
   - Mark calendar for 3-4 weeks after site launch
   - Don't rush!

---

### **PHASE 6: Apply for AdSense (Week 3-4)**

#### Step 1: Pre-Application Checklist

Go to `ADSENSE_APPROVAL_CHECKLIST.md` and verify:
- [ ] Site live for 2+ weeks
- [ ] 5,000+ words of content
- [ ] Privacy Policy mentions "Google AdSense"
- [ ] All pages work (test them!)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Real email address visible

#### Step 2: Apply

1. Go to: https://www.google.com/adsense/
2. Sign in / Sign up
3. Add your site URL
4. Complete application
5. Click "Submit for Review"

#### Step 3: Wait (1-3 Weeks)

- Check email daily (including spam)
- Don't make major site changes
- Keep site online 24/7
- Be patient!

---

### **PHASE 7: After Approval (If Approved!)**

#### Step 1: Get Ad Details

1. Log into AdSense
2. Go to: Ads → Ad units
3. Create 2-3 ad units:
   - Ad unit 1: "Homepage Top" (Horizontal)
   - Ad unit 2: "Homepage Mid" (Rectangle)
   - Ad unit 3: "Homepage Bottom" (Auto)
4. Copy each slot ID (numbers like: 1234567890)

#### Step 2: Add Ads to Site

Open `PROMPT_02_ADSENSE_READY.md`:

1. Fill in your details:
```
- **My Publisher ID:** ca-pub-1234567890
- **My Slot IDs:**
  - Slot 1 (Horizontal): 1111111111
  - Slot 2 (Rectangle): 2222222222
  - Slot 3 (Auto): 3333333333
```

2. Copy entire file
3. Paste into AI assistant
4. AI will add ad code to your site

#### Step 3: Deploy Ad Updates

```bash
git add .
git commit -m "Add Google AdSense ads"
git push
```

Wait 1 minute for Vercel to redeploy.

#### Step 4: Wait for Ads to Appear

- **0-6 hours:** Blank spaces (normal)
- **6-24 hours:** Test ads appear
- **24-48 hours:** Real ads start showing
- **1 week:** Full ad inventory available

#### Step 5: Celebrate! 🎉

You're now earning from ads!

Check AdSense dashboard for:
- Impressions (how many times ads shown)
- Clicks (how many times ads clicked)
- Earnings (your money!)

---

## 🆘 Troubleshooting

### Problem: AI Generated Too Much/Too Little Content

**Solution:**
```
Please expand the [section name] on the [page name] to approximately [word count] words while keeping it informative and relevant to [topic].
```

Or:
```
Please condense the [section name] on the [page name] to be more concise while keeping key information.
```

---

### Problem: AI Used Wrong Email Address

**Solution:**
```
Please find and replace all instances of [wrong email] with [correct email] across all files.
```

---

### Problem: Build Errors After Deployment

**Solution 1: Check Build Logs**
1. Go to Vercel Dashboard
2. Click your project
3. Click failed deployment
4. Click "View Build Logs"
5. Copy the error message
6. Paste into AI:

```
I'm getting this build error on Vercel:

[paste error here]

Please fix it.
```

**Solution 2: Common Fixes**

Ask AI:
```
Please check for:
1. Missing imports
2. TypeScript errors
3. Incorrect file paths
4. Missing dependencies in package.json

And fix any issues you find.
```

---

### Problem: Pages Show 404 After Deployment

**Solution:**

Check file structure. Ask AI:
```
Please verify the file structure matches Next.js 14 App Router requirements:
- src/app/page.tsx for homepage
- src/app/about/page.tsx for /about
- src/app/privacy-policy/page.tsx for /privacy-policy
- src/app/contact/page.tsx for /contact

If incorrect, please fix the structure.
```

---

### Problem: Console Shows Errors

**Solution:**

1. Open your site
2. Press F12 → Console
3. Copy ALL error messages (red text)
4. Paste into AI:

```
My site shows these console errors:

[paste errors here]

Please fix them.
```

---

## 💡 Pro Tips for AI Coding

### Tip 1: Be Specific

❌ Bad: "Make it better"
✅ Good: "Add 200 more words to the About Us page, focusing on why users should trust this service"

### Tip 2: Ask for Explanations

After AI generates code:
```
Please explain what this code does and why it's structured this way.
```

### Tip 3: Iterate in Small Steps

Don't ask AI to change everything at once. Do:
1. Fix homepage content
2. Test it
3. Fix about page
4. Test it
5. Etc.

### Tip 4: Save Working Versions

Before making big changes:
```bash
git add .
git commit -m "Working version before [change]"
git push
```

Now you can always go back if something breaks!

### Tip 5: Use Multiple AI Tools

If one AI struggles:
- Try the same prompt in a different AI tool
- Sometimes Claude is better at content, Cursor better at structure
- Compare outputs and pick the best

---

## 📊 Success Checklist

Before applying for AdSense:

### Content ✓
- [ ] 5,000+ total words across all pages
- [ ] Privacy Policy says "Google AdSense"
- [ ] About page has 2,000+ words
- [ ] Contact page has real email
- [ ] All content is original (not copied)

### Technical ✓
- [ ] Site deployed on Vercel
- [ ] All pages load without errors
- [ ] Mobile responsive
- [ ] Footer navigation works
- [ ] robots.txt accessible
- [ ] ads.txt with Publisher ID

### Timing ✓
- [ ] Site has been live for 2+ weeks
- [ ] If previously rejected, waited 3-4 weeks
- [ ] No recent major changes (last 48 hours)

### Testing ✓
- [ ] Tested on desktop (Chrome, Safari, Firefox)
- [ ] Tested on mobile (real phone or DevTools)
- [ ] No console errors (press F12)
- [ ] All links work
- [ ] Email links open email client

---

## 🎯 Quick Reference

### Commands You'll Use

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Commit changes
git add .
git commit -m "Description of changes"
git push
```

### URLs You'll Need

- **Google AdSense:** https://www.google.com/adsense/
- **Google Search Console:** https://search.google.com/search-console/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub:** https://github.com

### Files You'll Edit

- `PROMPT_01_INITIAL_SETUP.md` - Start here
- `PROMPT_02_ADSENSE_READY.md` - After approval
- `ADSENSE_APPROVAL_CHECKLIST.md` - Before applying

---

## 🎉 Summary

**Your Journey:**

1. **Day 1:** Use PROMPT_01 with AI → Get complete site
2. **Day 1:** Deploy to Vercel → Site is live
3. **Week 1-2:** Drive traffic, let Google discover
4. **Week 3-4:** Apply for AdSense
5. **Week 5-7:** Wait for approval
6. **After Approval:** Use PROMPT_02 → Add ads → Earn money! 💰

**Key Success Factors:**
- ✅ 5,000+ words of content
- ✅ "Google AdSense" in Privacy Policy
- ✅ Wait 3-4 weeks before applying
- ✅ Real email, professional appearance
- ✅ No placeholder ad code until approved

**Your Approval Rate:** 80-90% if you follow this guide! 🎯

---

## 📞 Need More Help?

**If AI isn't working:**
1. Try breaking your request into smaller parts
2. Switch to a different AI tool
3. Search for the specific error message online
4. Ask in communities: Reddit r/nextjs, r/webdev

**If AdSense rejects you:**
1. Read the SPECIFIC rejection reason
2. Check `ADSENSE_TROUBLESHOOTING.md`
3. Fix the specific issue
4. Wait 4 weeks
5. Try again

**Remember:**
- Most successful sites were rejected 2-3 times
- Patience is more important than perfection
- Each rejection teaches you something
- Keep trying!

---

**Good luck building your AdSense-approved site with AI!** 🚀

You've got this! 💪
