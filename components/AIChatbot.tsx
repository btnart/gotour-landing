"use client";

import { ScrollReveal } from "./useScrollReveal";

export default function AIChatbot() {
  return (
    <section id="ai-service" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="ads-label-medium text-primary">AI 客服</span>
          </div>
          <h2 className="ads-display-small text-on-surface mb-5">
            24/7 全天候<em className="not-italic text-primary"> AI 導覽員</em>，
            <br className="hidden md:block" />隨時回答訪客的每一個好奇
          </h2>
          <p className="ads-body-large text-on-surface-variant max-w-2xl mx-auto">
            整合最先進的大型語言模型，讓您的場域擁有一位永遠不會疲倦、精通所有展品知識的智慧客服。
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Chat mockup */}
          <ScrollReveal className="flex-1 max-w-md w-full mx-auto lg:mx-0" delay={0.1}>
            <div className="rounded-2xl bg-surface-container border border-outline-variant/30 overflow-hidden shadow-2xl shadow-black/40">
              {/* Chat header */}
              <div className="px-5 py-4 bg-surface-container-high border-b border-outline-variant/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center ads-label-large text-on-primary">AI</div>
                <div>
                  <h4 className="ads-title-small text-on-surface">GoTour AI 導覽員</h4>
                  <div className="ads-label-small text-success flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> 線上中
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-5 min-h-[360px]">
                <div className="flex justify-end">
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tr-sm bg-primary text-on-primary ads-body-medium">
                    這幅畫用了什麼技法？看起來好特別
                  </div>
                </div>
                <div className="flex justify-start animate-[fadeSlideUp_0.5s_ease_0.3s_both]">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm bg-surface-container-high text-on-surface ads-body-medium">
                    這幅作品使用了「<span className="text-primary font-medium">點描法</span>」（Pointillism），由藝術家運用數千個細小色點構成畫面。走近時您會看到獨立色點，退後幾步則會融合成完整光影。建議您從不同距離欣賞！
                  </div>
                </div>
                <div className="flex justify-end animate-[fadeSlideUp_0.5s_ease_0.6s_both]">
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tr-sm bg-primary text-on-primary ads-body-medium">
                    附近有推薦的餐廳嗎？
                  </div>
                </div>
                <div className="flex justify-start animate-[fadeSlideUp_0.5s_ease_0.9s_both]">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm bg-surface-container-high text-on-surface ads-body-medium">
                    美術館 B1 有「<span className="text-primary font-medium">光影咖啡廳</span>」提供輕食。若想用正餐，步行 3 分鐘有「山居小館」，評價很高的台菜料理。需要我幫您導航嗎？
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-outline-variant/20 flex items-center gap-3">
                <div className="flex-1 px-4 py-2.5 rounded-full bg-surface-container-high ads-body-medium text-on-surface-hint">輸入您的問題...</div>
                <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F0C09" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal className="flex-1" delay={0.3}>
            <h3 className="ads-headline-large text-on-surface mb-4">不只回答問題，更創造體驗</h3>
            <p className="ads-body-large text-on-surface-variant mb-10">AI 客服深度整合場域知識庫，精準回覆每一個提問。</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { emoji: "🧠", title: "RAG 知識庫引擎", desc: "整合展品資料、場館資訊、周邊推薦，回答精準有據" },
                { emoji: "🌐", title: "多語即時問答", desc: "支援 12 種語言即時對話，外國旅客也能暢通無阻" },
                { emoji: "📊", title: "問題分析報告", desc: "自動歸納訪客最常問的問題，幫助優化展覽與服務" },
                { emoji: "🔗", title: "服務串接", desc: "可連結票務系統、餐廳預約、紀念品商店等延伸服務" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-background border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-4">{item.emoji}</div>
                  <h4 className="ads-title-medium text-on-surface mb-2">{item.title}</h4>
                  <p className="ads-body-small text-on-surface-hint">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
