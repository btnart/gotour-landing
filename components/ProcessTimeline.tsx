"use client";

import { ScrollReveal } from "./useScrollReveal";

const steps = [
  { num: "1", title: "需求訪談", desc: "深入了解場域特性、目標受眾與現有痛點，擬定最佳導覽方案。" },
  { num: "2", title: "內容製作", desc: "專業團隊協助撰稿、錄音、翻譯，AI 輔助加速多語系產出。" },
  { num: "3", title: "系統部署", desc: "雲端部署、Beacon 安裝、AI 知識庫建置，全由我方工程團隊負責。" },
  { num: "4", title: "正式上線", desc: "教育訓練、試營運調整、持續優化。上線後提供專屬客戶成功經理。" },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="ads-label-medium text-primary">導入流程</span>
          </div>
          <h2 className="ads-display-small text-on-surface mb-5">
            從洽談到上線，<em className="not-italic text-primary">最快 4 週</em>
          </h2>
          <p className="ads-body-large text-on-surface-variant max-w-xl mx-auto">
            我們的團隊將全程陪伴，確保每個環節都符合您的需求。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.15}>
              <div className="relative text-center group">
                <div className="w-14 h-14 rounded-full bg-surface-container border-2 border-primary/40 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 group-hover:border-primary transition-all duration-300 relative z-10">
                  <span className="ads-title-large text-primary">{s.num}</span>
                </div>
                <h3 className="ads-title-large text-on-surface mb-3">{s.title}</h3>
                <p className="ads-body-medium text-on-surface-hint">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
