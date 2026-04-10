"use client";

import { ScrollReveal } from "./useScrollReveal";

export default function CTASection() {
  return (
    <section id="contact" className="py-32 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <span className="ads-label-medium text-primary">開始合作</span>
            </div>
            <h2 className="ads-display-small text-on-surface mb-5">
              準備好讓您的場域<em className="not-italic text-primary">說出更好的故事</em>了嗎？
            </h2>
            <p className="ads-body-large text-on-surface-variant mb-4">
              無論您是博物館、觀光景區還是政府單位，我們都有最適合的方案。
            </p>
            <p className="ads-body-large text-on-surface-variant mb-12">
              預約一場 30 分鐘的線上展示，讓我們為您示範。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@gotour.io"
                className="px-8 py-4 bg-primary text-on-primary rounded-full ads-label-large hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                預約免費展示 →
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-outline-variant text-on-surface-variant rounded-full ads-label-large hover:bg-surface-container hover:text-on-surface transition-all"
              >
                下載合作提案
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
