"use client";

import { ScrollReveal } from "./useScrollReveal";

const clients = [
  { emoji: "🏛️", title: "博物館 · 美術館", desc: "藏品解說、特展語音導覽、兒童互動導覽、無障礙語音服務。取代傳統導覽機，降低維護成本，提升觀眾體驗。" },
  { emoji: "🏔️", title: "觀光景區 · 風景區", desc: "戶外景點定位導覽、步道生態解說、GPS 路線引導。配合 Bluetooth Beacon 定位，走到哪聽到哪。" },
  { emoji: "🏛", title: "政府觀光單位", desc: "觀光局、文化局、縣市政府觀光處。多語系城市導覽、文化資產解說、節慶活動導覽，提升國際旅客滿意度。" },
  { emoji: "🎭", title: "文化園區 · 古蹟", desc: "歷史建築導覽、文創園區漫步指引、古蹟修復故事。讓沉默的建築重新開口說話，賦予文化資產新生命。" },
  { emoji: "🌿", title: "生態園區 · 主題樂園", desc: "動植物解說、園區互動遊戲導覽、親子探險路線。結合 AI 問答讓遊客邊玩邊學，大幅提升回訪率。" },
  { emoji: "✈️", title: "旅行社 · DMO", desc: "自由行語音導遊、團體行程補充導覽、城市散步路線。為旅客提供 24 小時不打烊的 AI 導遊服務。" },
];

export default function PainPoints() {
  return (
    <section id="clients" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="ads-label-medium text-primary">適用場域</span>
          </div>
          <h2 className="ads-display-small text-on-surface mb-5">
            不只是博物館，<em className="not-italic text-primary">每一個值得被述說的場域</em>
            <br className="hidden md:block" />都是我們的舞台
          </h2>
          <p className="ads-body-large text-on-surface-variant max-w-2xl mx-auto">
            無論是千年古蹟、現代美術館、國家風景區還是城市觀光路線，GoTour 都能為您量身打造最合適的導覽方案。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="group p-8 rounded-xl bg-surface-container border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 h-full">
                <div className="text-4xl mb-5">{c.emoji}</div>
                <h3 className="ads-title-large text-on-surface mb-3">{c.title}</h3>
                <p className="ads-body-medium text-on-surface-hint">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
