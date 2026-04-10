"use client";

import { ScrollReveal } from "./useScrollReveal";

/* ---- Mock UIs ---- */
function LanguageMockup() {
  const langs = [
    { flag: "🇹🇼", name: "繁體中文", status: "已上線", pct: 100, color: "#82D28A" },
    { flag: "🇺🇸", name: "English", status: "已上線", pct: 100, color: "#82D28A" },
    { flag: "🇯🇵", name: "日本語", status: "翻譯中", pct: 87, color: "#EFCE5A" },
    { flag: "🇰🇷", name: "한국어", status: "翻譯中", pct: 62, color: "#EFCE5A" },
  ];
  return (
    <div className="rounded-2xl bg-surface-container border border-outline-variant/20 p-6">
      <div className="ads-title-medium text-on-surface mb-5">多語系管理中心</div>
      <div className="space-y-4">
        {langs.map((l) => (
          <div key={l.name} className="flex items-center gap-3">
            <span className="text-xl shrink-0">{l.flag}</span>
            <span className="ads-body-medium text-on-surface-variant w-24">{l.name}</span>
            <div className="flex-1 h-2.5 rounded-full bg-surface-container-high overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-[1.5s] ease-out"
                style={{ width: `${l.pct}%`, background: l.color }}
              />
            </div>
            <span className="ads-label-small text-on-surface-hint w-14 text-right">{l.status}</span>
            <span className="ads-label-large text-on-surface-variant w-12 text-right">{l.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMockup() {
  const bars = [45, 62, 75, 55, 88, 70, 82];
  const days = ["一", "二", "三", "四", "五", "六", "日"];
  return (
    <div className="rounded-2xl bg-surface-container border border-outline-variant/20 p-6">
      <div className="ads-title-medium text-on-surface mb-1">數據儀表板</div>
      <div className="ads-label-small text-on-surface-hint mb-6">本週即時數據</div>
      {/* Bar chart */}
      <div className="flex items-end gap-3 h-36 mb-4">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full rounded-t transition-all duration-[1.2s] ease-out"
              style={{
                height: `${h}%`,
                background: i >= 5 ? 'rgba(186,153,114,0.4)' : '#BA9972',
              }}
            />
            <span className="ads-label-small text-on-surface-hint">{days[i]}</span>
          </div>
        ))}
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-outline-variant/20">
        {[
          { label: "使用人次", value: "4,231" },
          { label: "平均時長", value: "18 min" },
          { label: "滿意度", value: "96.3%" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="ads-label-small text-on-surface-hint mb-1">{s.label}</div>
            <div className="ads-title-medium text-on-surface">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CMSMockup() {
  return (
    <div className="rounded-2xl bg-surface-container border border-outline-variant/20 p-6">
      <div className="flex gap-4">
        {/* Sidebar */}
        <div className="w-20 space-y-3 pt-1">
          <div className="h-3 w-16 rounded bg-primary/40" />
          <div className="h-2.5 w-12 rounded bg-outline-variant/30" />
          <div className="h-2.5 w-16 rounded bg-outline-variant/30" />
          <div className="h-2.5 w-10 rounded bg-outline-variant/30" />
        </div>
        {/* Content area */}
        <div className="flex-1">
          <div className="ads-title-medium text-on-surface mb-4">內容管理系統</div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-lg bg-surface-container-high border border-outline-variant/20 p-3">
                <div className="h-1/2 rounded bg-primary/10 mb-2" />
                <div className="h-2 w-3/4 rounded bg-outline-variant/30 mb-1.5" />
                <div className="h-2 w-1/2 rounded bg-outline-variant/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    badge: "多語系",
    title: "12 種語言，一鍵切換",
    desc: "AI 翻譯加上母語者校對，確保每種語言的導覽都自然流暢。後台即時管理翻譯進度，有效服務國際旅客。",
    highlights: ["中、英、日、韓、法、德、西、泰語等", "AI 翻譯 + 人工校對雙重品質保證", "旅客自動語系偵測，免手動切換"],
    mockup: <LanguageMockup />,
    reverse: false,
  },
  {
    badge: "數據洞察",
    title: "即時數據，掌握每位訪客動態",
    desc: "從使用人數、熱門展品到停留時間，全面數據視覺化呈現。讓管理者用數據驅動決策。",
    highlights: ["即時使用人次、尖峰時段分析", "熱門展品 / 景點排行榜", "月報自動產出，支援 Excel 匯出"],
    mockup: <DashboardMockup />,
    reverse: true,
  },
  {
    badge: "內容管理",
    title: "直覺化後台，自主管理所有內容",
    desc: "場館人員無需技術背景即可輕鬆新增、編輯導覽內容。支援文字、圖片、音檔上傳，即時預覽效果。",
    highlights: ["拖拉式編輯器，所見即所得", "支援 TTS 自動語音合成", "版本控制，修改紀錄完整保留"],
    mockup: <CMSMockup />,
    reverse: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="ads-label-medium text-primary">核心功能</span>
          </div>
          <h2 className="ads-display-small text-on-surface mb-5">
            您想做的，<em className="not-italic text-primary">我們都做得到</em>
          </h2>
          <p className="ads-body-large text-on-surface-variant max-w-2xl mx-auto">
            從內容製作到系統上線，從多語系支援到數據分析，GoTour 提供一站式解決方案。
          </p>
        </ScrollReveal>

        <div className="space-y-24">
          {features.map((f) => (
            <ScrollReveal key={f.title} delay={0.1}>
              <div className={`flex flex-col ${f.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16`}>
                {/* Mockup */}
                <div className="flex-1 w-full">{f.mockup}</div>
                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 ads-label-medium text-primary mb-5">
                    {f.badge}
                  </div>
                  <h3 className="ads-headline-large text-on-surface mb-5">{f.title}</h3>
                  <p className="ads-body-large text-on-surface-variant mb-8">{f.desc}</p>
                  <ul className="space-y-4">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 ads-body-medium text-on-surface-variant">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-success shrink-0 mt-0.5">
                          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                          <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
