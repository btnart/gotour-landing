"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-outline-variant"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="#0F0C09"
              />
              <circle cx="12" cy="9" r="2.5" fill="#BA9972" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-on-surface">GoTour</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#clients" className="text-on-surface-variant hover:text-primary transition-colors text-sm">適用場域</a>
          <a href="#features" className="text-on-surface-variant hover:text-primary transition-colors text-sm">功能特色</a>
          <a href="#ai-service" className="text-on-surface-variant hover:text-primary transition-colors text-sm">AI 客服</a>
          <a href="#cases" className="text-on-surface-variant hover:text-primary transition-colors text-sm">成功案例</a>
          <a href="#process" className="text-on-surface-variant hover:text-primary transition-colors text-sm">導入流程</a>
          <a href="#contact" className="ml-4 px-5 py-2 bg-primary text-on-primary rounded-full text-sm font-medium hover:brightness-110 transition-all">預約展示</a>
        </div>
      </div>
    </nav>
  );
}
