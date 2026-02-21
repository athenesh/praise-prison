# Google AdSense Troubleshooting Guide for SPAs

This guide documents solutions for common AdSense rejections, specifically focusing on Single Page Applications (SPAs) and tool-based websites.

## 1. Rejection Reason: "Screens without publisher-content"

**Symptom:**
Google rejects the site stating it has "Google-served ads on screens without publisher-content". This means the crawler sees the page but cannot find enough "valuable text inventory" to contextually match ads.

### Scenario A: Single Page Application (SPA) / Tool Site
*   **Context:** Your site is a tool (e.g., calculator, generator, game) consisting of one main page (`/`) with inputs, buttons, and dynamic content.
*   **Problem:** The page has very little static text. To a bot, it looks like an empty form or a login screen.
*   **Solution (The "Praise Prison" Strategy):**
    *   **Add Rich Content:** Create a substantial text section (at least 300-500 words) explaining the service.
    *   **Content Types:** "About Us", "How to Use", "Why This Matters", "FAQ".
    *   **Placement:** Place this content below the main tool area (e.g., in a footer or a dedicated section). It must be visible to users and crawlers.
    *   **Implementation:** See `src/components/SEOContent.tsx` for an example.

### Scenario B: Multi-Page Application
*   **Context:** Your site has multiple pages (Home, Login, Dashboard, Blog).
*   **Problem:** Ads are placed on low-value pages like Login, Register, or "Thank You" pages that have no content.
*   **Solution (The "Exclusion" Strategy):**
    *   **Remove Ads:** Do not place ad code on pages that have no content.
    *   **Targeting:** Only enable Auto Ads or place ad units on pages with articles, blog posts, or rich descriptions.

## 2. Technical Requirements Checklist

Ensure these technical items are in place before requesting a review:

*   **`robots.txt`**:
    *   **Location:** `public/robots.txt`
    *   **Content:** Must allow crawling.
    ```text
    User-agent: *
    Allow: /
    ```
    *   **Why:** If Googlebot is blocked, it can't see your content or ads.

*   **Next.js Script Implementation**:
    *   Use `next/script` in `layout.tsx`.
    *   Strategy: `afterInteractive` is usually best for performance.
    *   Ensure the `client` ID matches your AdSense Publisher ID exactly.

## 3. "High Quality Content" Guidelines

*   **Originality:** Do not copy-paste text from other sites (including Google's own policy pages). Google flags this as "Scraped Content".
*   **Relevance:** The text must be about *your* specific service.
*   **User Value:** The content should help the user understand or use the tool better.
