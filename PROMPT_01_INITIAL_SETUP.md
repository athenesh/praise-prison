# 🤖 PROMPT 01: Initial Setup for Google AdSense Approval

**COPY THIS ENTIRE FILE AND PASTE IT INTO YOUR AI CODING ASSISTANT (Claude, Cursor, Trae, Chad)**

---

## 📋 CONTEXT FOR AI

You are helping me build a Next.js 14 website that will be submitted to Google AdSense for monetization approval. Google has strict requirements, and I need you to set up the project structure correctly from the start.

---

## 🎯 PROJECT REQUIREMENTS

### My Project Details:
- **Service Name:** [YOUR SERVICE NAME HERE - e.g., "My Awesome Tool"]
- **Service Description:** [BRIEF DESCRIPTION - e.g., "A tool that helps users with X problem"]
- **Target Audience:** [WHO USES IT - e.g., "Students, workers, general public"]
- **Main Features:** [KEY FEATURES - e.g., "Feature 1, Feature 2, Feature 3"]
- **Contact Email:** [YOUR EMAIL - e.g., "yourname@gmail.com"]
- **Domain:** [YOUR DOMAIN - e.g., "mysite.vercel.app"]

### Technical Stack:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18
- Deployed on Vercel

---

## 🏗️ WHAT I NEED YOU TO BUILD

### PHASE 1: Project Structure

Create a Next.js 14 project with this EXACT structure:

```
my-project/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with AdSense meta tag
│   │   ├── page.tsx            # Homepage (my main service)
│   │   ├── globals.css         # Global styles
│   │   ├── about/
│   │   │   └── page.tsx        # About Us page (REQUIRED for AdSense)
│   │   ├── privacy-policy/
│   │   │   └── page.tsx        # Privacy Policy (REQUIRED for AdSense)
│   │   └── contact/
│   │       └── page.tsx        # Contact page (REQUIRED for AdSense)
│   └── components/
│       └── SEOContent.tsx      # SEO-rich content component
├── public/
│   ├── robots.txt              # Allow search engines
│   └── ads.txt                 # AdSense verification (I'll provide content)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## 📝 CRITICAL REQUIREMENTS FOR ADSENSE APPROVAL

### Content Requirements (MUST HAVE):

1. **Total Content: 5,000+ words minimum across all pages**
   - Homepage: 1,000+ words
   - About page: 2,000+ words
   - Privacy Policy: 1,500+ words
   - Contact page: 1,000+ words

2. **Essential Pages (ALL REQUIRED):**
   - Privacy Policy that explicitly mentions "Google AdSense"
   - About Us page explaining the service
   - Contact page with real email address
   - Homepage with the actual service/tool

3. **Technical Setup:**
   - Footer navigation on ALL pages (links to About, Privacy, Contact)
   - robots.txt that allows crawling
   - ads.txt with AdSense Publisher ID
   - Mobile responsive (Tailwind)
   - No placeholder ad slots (we'll add real ones after approval)

---

## 🎨 DESIGN REQUIREMENTS

### Color Scheme:
- Background: Dark (zinc-900) OR Light (white/sky-50) - your choice
- Text: High contrast (readable)
- Accent: Choose one primary color (e.g., sky-500, purple-500, green-500)

### Layout:
- Clean, professional appearance
- Clear navigation
- Mobile-first responsive design
- Footer on every page with links

---

## 📄 SPECIFIC INSTRUCTIONS FOR EACH FILE

### 1. src/app/layout.tsx

**Requirements:**
```tsx
- Add this meta tag in <head>:
  <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
  (I'll provide my Publisher ID later)

- Title: "[My Service Name] - [Brief Tagline]"
- Description: 150-160 characters explaining the service
- Include Open Graph tags for social sharing
- Include robots: { index: true, follow: true }
- NO AdSense script yet (we'll add after approval)
```

### 2. src/app/page.tsx (Homepage)

**Requirements:**
```tsx
- Main service/tool interface at the top
- SEO content section at the bottom (1,000+ words)
- Use the SEOContent component
- Footer with navigation links
- Clear call-to-action
- Professional appearance
```

### 3. src/app/about/page.tsx

**Requirements:**
```tsx
MUST include these sections (2,000+ words total):

- "Our Mission" (200+ words)
  - What problem does your service solve?
  - Why did you create it?

- "What We Do" (300+ words)
  - Detailed explanation of your service
  - Key features and benefits

- "Who Uses It?" (300+ words)
  - Target audience descriptions
  - 3 user personas (students, workers, etc.)

- "Our Philosophy" (200+ words)
  - Values and principles
  - What makes your service unique

- "Team Introduction" (200+ words)
  - About the creators
  - Vision for the future

- "Contact & Support" (100+ words)
  - Email address
  - How to get help

- "FAQ" (500+ words)
  - At least 5-8 common questions
  - Detailed answers

- Footer with "Back to home" button
```

### 4. src/app/privacy-policy/page.tsx

**Requirements:**
```tsx
MUST include these sections (1,500+ words total):

- "Information We Collect" (300+ words)
  - What data you collect (if any)
  - Cookies and tracking

- "Google AdSense" section (300+ words) ⚠️ CRITICAL!
  - MUST explicitly say "Google AdSense"
  - Explain that you use AdSense for ads
  - Mention Google's cookies
  - Link to Google's privacy policy:
    https://policies.google.com/privacy
    https://policies.google.com/technologies/ads

- "How We Use Information" (200+ words)
  - Service provision
  - Analytics
  - Legal compliance

- "Data Protection" (200+ words)
  - Security measures
  - HTTPS encryption

- "Third-Party Services" (200+ words)
  - Google AdSense
  - Vercel hosting
  - External links

- "Children's Privacy" (100+ words)
  - Not for under 13
  - No intentional collection from children

- "Cookie Management" (200+ words)
  - How users can control cookies
  - Browser settings

- "Policy Updates" (100+ words)
  - How you'll notify of changes

- "Contact Information" (100+ words)
  - Email address for privacy questions
  - Response time

- Footer with "Back to home" button
```

### 5. src/app/contact/page.tsx

**Requirements:**
```tsx
MUST include these sections (1,000+ words total):

- "Contact Us" heading
- Introduction (100+ words)

- Contact Methods section (200+ words):
  - General Inquiries email
  - Business/Partnership email (can be same)
  - Bug Reports email (can be same)
  - Website URL
  - Response time (e.g., "24-48 hours")

- FAQ section (500+ words):
  - "Is this service free?"
  - "Is my data safe?"
  - "How do I report bugs?"
  - "Can I suggest features?"
  - At least 5-8 questions

- "Feedback & Reviews" section (200+ words)
  - Encourage user feedback
  - Email link for feedback

- Footer with "Back to home" button
```

### 6. src/components/SEOContent.tsx

**Requirements:**
```tsx
This component goes at the BOTTOM of homepage.

MUST include these sections (1,000+ words total):

- "About [Service Name]" (300+ words)
  - What is this service?
  - How does it help users?
  - Why should users trust it?

- "How to Use" (300+ words)
  - Step-by-step instructions
  - At least 4-5 clear steps

- "Who Uses [Service Name]?" (200+ words)
  - 3 user personas with descriptions

- "Key Features" (200+ words)
  - List 5-8 features with descriptions

- FAQ section (300+ words)
  - 4-5 common questions

- Footer navigation links
  - About | Privacy Policy | Contact

Props: { mood?: string } (optional for theme switching)
```

### 7. public/robots.txt

**Content (EXACT):**
```
User-agent: *
Allow: /
```

### 8. public/ads.txt

**Content (I'll provide later):**
```
google.com, pub-XXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

---

## 🎨 STYLING REQUIREMENTS

### Use Tailwind CSS with these principles:

1. **Responsive Design:**
   - Mobile-first approach
   - Use `md:` and `lg:` breakpoints
   - Test on small screens

2. **Color Contrast:**
   - High contrast text (WCAG AA compliance)
   - Avoid `opacity-60` (use explicit colors like `text-zinc-500`)
   - Make sure text is readable

3. **Typography:**
   - Clear headings (text-2xl, text-3xl, text-4xl)
   - Readable body text (text-base)
   - Good line spacing (leading-relaxed)

4. **Layout:**
   - Max-width containers (max-w-4xl, max-w-6xl)
   - Proper padding (p-4, p-6, p-8)
   - Consistent spacing (space-y-4, space-y-6)

---

## ⚠️ CRITICAL: WHAT NOT TO DO

### DO NOT include:
- ❌ Fake email addresses (no support@example.com)
- ❌ Lorem ipsum placeholder text
- ❌ Copied content from other sites
- ❌ AdSense ad code yet (we'll add after approval)
- ❌ Placeholder ad slots like `<AdBanner slot="123456" />`
- ❌ Login/register pages (Google rejects these)
- ❌ Empty pages with just a title
- ❌ Links to prohibited content (gambling, adult, violence)

### DO include:
- ✅ Real email address (mine: [YOUR EMAIL])
- ✅ Original, unique content
- ✅ 5,000+ total words across all pages
- ✅ "Google AdSense" explicitly mentioned in Privacy Policy
- ✅ Footer navigation on every page
- ✅ Mobile responsive design
- ✅ Clean, professional appearance

---

## 🚀 NEXT.JS CONFIGURATION

### package.json dependencies:
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.19",
    "eslint": "^8",
    "eslint-config-next": "14.2.15",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

### next.config.mjs:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean config, no special settings needed yet
};

export default nextConfig;
```

---

## 📋 CHECKLIST FOR AI

Please confirm you'll create:

- [ ] Project structure exactly as specified
- [ ] All 4 essential pages (home, about, privacy, contact)
- [ ] SEOContent component with 1,000+ words
- [ ] About page with 2,000+ words
- [ ] Privacy Policy with 1,500+ words (mentions "Google AdSense")
- [ ] Contact page with 1,000+ words
- [ ] Footer navigation on ALL pages
- [ ] robots.txt and ads.txt in public folder
- [ ] Mobile responsive design
- [ ] No placeholder ad slots
- [ ] Real email address throughout
- [ ] High contrast, accessible design

---

## 🎯 EXAMPLE FLOW FOR AI

Here's how to structure your response:

1. **First**, create the basic Next.js structure
2. **Then**, create layout.tsx with metadata
3. **Then**, create the homepage (page.tsx)
4. **Then**, create About page
5. **Then**, create Privacy Policy page
6. **Then**, create Contact page
7. **Then**, create SEOContent component
8. **Finally**, create robots.txt and ads.txt

For each file, show me:
- The file path
- The complete code
- A brief explanation of what it does

---

## 💡 TONE & STYLE

For all content you generate:
- **Professional** but friendly
- **Informative** without being too technical
- **User-focused** (explain benefits, not just features)
- **Original** (don't copy from other sites)
- **Clear** and easy to understand
- **Positive** and encouraging

---

## 🔄 AFTER YOU CREATE THE FILES

Once you've created all files, please:

1. Show me the complete file structure
2. Confirm total word count (should be 5,000+)
3. Confirm "Google AdSense" is mentioned in Privacy Policy
4. Confirm all pages have footer navigation
5. Confirm no placeholder ad slots exist
6. Tell me what to do next

---

## ✅ START NOW

Please create the complete Next.js 14 project structure with all files as specified above. Use the project details I provided at the top.

**Remember:**
- 5,000+ words total content
- "Google AdSense" explicitly in Privacy Policy
- Real email address throughout
- No placeholder ads
- Footer on every page
- Mobile responsive

**Begin!**
