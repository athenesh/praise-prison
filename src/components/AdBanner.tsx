"use client";
import { useEffect } from "react";

interface AdBannerProps {
  slot: string;
  style?: React.CSSProperties;
  format?: "auto" | "fluid" | "rectangle";
  responsive?: "true" | "false";
}

export default function AdBanner({ slot, style, format = "auto", responsive = "true" }: AdBannerProps) {
  useEffect(() => {
    // Prevent AdSense 400 errors by skipping placeholders
    if (slot === "1234567890" || slot === "0987654321") {
      console.warn("AdSense: Skipping placeholder slot ID to prevent 400 error.");
      return;
    }

    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      // In development or if ad blocker is active, this might fail quietly
      console.warn("AdSense error:", err);
    }
  }, []);

  if (slot === "1234567890" || slot === "0987654321") {
    return (
      <div className="ad-container overflow-hidden my-4 bg-zinc-800/20 border border-zinc-700/50 rounded flex items-center justify-center text-xs text-zinc-500" style={{ ...style, minHeight: '100px' }}>
        AdSense Placeholder (Slot: {slot})
      </div>
    );
  }

  return (
    <div className="ad-container overflow-hidden my-4" style={{ minHeight: '100px' }}>
      <ins
        className="adsbygoogle"
        style={style || { display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
