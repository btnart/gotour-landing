"use client";

import { ScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    stars: 5,
    quote: "導入 GoTour 之後，外國旅客的滿意度調查從 3.2 提升到 4.7。特別是 AI 客服功能，讓服務台人員可以專注在更重要的任務上。",
    name: "陳館長",
    role: "國立歷史博物館 館長",
    initial: "陳",
  },
  {
    stars: 5,
    quote: "戶外景區最頭痛的就是導覽設備損壞和語言隔閡。GoTour 的 PWA 方案讓遊客用自己的手機就能使用，GPS 導覽在步道上表現超出預期。",
    name: "林處長",
    role: "日月潭風景區管理處",
    initial: "林",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="ads-label-medium text-primary">客戶好評</span>
          </div>
          <h2 className="ads-display-small text-on-surface">聽聽他們怎麼說</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="p-8 rounded-2xl bg-surface border border-outline-variant/20 hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                <div className="text-primary text-lg mb-5 tracking-wider">
                  {"★".repeat(t.stars)}
                </div>
                <blockquote className="ads-body-large text-on-surface-variant mb-8 flex-1">
                  「{t.quote}」
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-outline-variant/20">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center ads-label-large text-on-primary-container">
                    {t.initial}
                  </div>
                  <div>
                    <div className="ads-title-small text-on-surface">{t.name}</div>
                    <div className="ads-label-small text-on-surface-hint">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
