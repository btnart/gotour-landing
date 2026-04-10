"use client";

import { useState } from "react";
import { ScrollReveal } from "./useScrollReveal";

/* CSS gradient scene illustrations for each case type */
function CaseIllustration({ type }: { type: string }) {
  if (type === "博物館" || type === "美術館") {
    return (
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="200" fill="#1E1812" />
        <polygon points="100,120 200,50 300,120" fill="#353535" />
        <rect x="160" y="70" width="80" height="50" fill="#353535" />
        <rect x="175" y="80" width="20" height="35" rx="10" fill="#191919" />
        <rect x="205" y="80" width="20" height="35" rx="10" fill="#191919" />
        <rect x="130" y="85" width="30" height="22" rx="3" fill="#BA9972" opacity="0.5" />
        <rect x="240" y="85" width="30" height="22" rx="3" fill="#BA9972" opacity="0.5" />
        <line x1="100" y1="120" x2="300" y2="120" stroke="#504131" strokeWidth="2" />
        <polygon points="90,120 200,40 310,120" fill="none" stroke="#7A654B" strokeWidth="1" opacity="0.5" />
      </svg>
    );
  }
  if (type === "觀光景區" || type === "風景區") {
    return (
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="200" fill="#0A1A0A" />
        <polygon points="0,180 80,80 160,180" fill="#1A3D1A" />
        <polygon points="100,180 220,50 340,180" fill="#0D2B0D" />
        <polygon points="260,180 350,100 400,180" fill="#1A3D1A" />
        <circle cx="320" cy="50" r="20" fill="#EFCE5A" opacity="0.6" />
        <ellipse cx="200" cy="175" rx="180" ry="25" fill="#0A2A3D" opacity="0.5" />
        <circle cx="150" cy="130" r="3" fill="#82D28A" opacity="0.8" />
        <circle cx="220" cy="110" r="3" fill="#82D28A" opacity="0.8" />
        <circle cx="280" cy="125" r="3" fill="#82D28A" opacity="0.8" />
        <polyline points="150,130 220,110 280,125" stroke="#82D28A" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4,3" />
      </svg>
    );
  }
  if (type === "政府單位") {
    return (
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="200" fill="#1A1500" />
        <rect x="40" y="100" width="40" height="100" fill="#353535" />
        <rect x="100" y="80" width="30" height="120" fill="#424242" />
        <rect x="150" y="110" width="50" height="90" fill="#353535" />
        <rect x="220" y="70" width="35" height="130" fill="#4D4D4D" />
        <rect x="275" y="90" width="45" height="110" fill="#353535" />
        <rect x="340" y="85" width="40" height="115" fill="#424242" />
        <g fill="#EFCE5A" opacity="0.3">
          <rect x="50" y="110" width="8" height="6" rx="1" />
          <rect x="50" y="125" width="8" height="6" rx="1" />
          <rect x="230" y="80" width="8" height="6" rx="1" />
          <rect x="230" y="95" width="8" height="6" rx="1" />
          <rect x="345" y="95" width="8" height="6" rx="1" />
        </g>
        <circle cx="120" cy="120" r="3" fill="#EFCE5A" opacity="0.5" />
        <circle cx="240" cy="90" r="3" fill="#EFCE5A" opacity="0.5" />
        <circle cx="350" cy="100" r="3" fill="#EFCE5A" opacity="0.5" />
        <line x1="120" y1="120" x2="240" y2="90" stroke="#EFCE5A" strokeWidth="0.8" opacity="0.3" />
        <line x1="240" y1="90" x2="350" y2="100" stroke="#EFCE5A" strokeWidth="0.8" opacity="0.3" />
      </svg>
    );
  }
  // 文化園區
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="#1E1812" />
      <rect x="120" y="80" width="160" height="100" rx="4" fill="#353535" />
      <path d="M120,80 Q200,40 280,80" fill="#424242" />
      <rect x="180" y="110" width="40" height="70" rx="20" fill="#191919" />
      <rect x="140" y="100" width="25" height="18" rx="3" fill="#BA9972" opacity="0.4" />
      <rect x="235" y="100" width="25" height="18" rx="3" fill="#BA9972" opacity="0.4" />
      <circle cx="200" cy="60" r="8" stroke="#DDB586" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

const cases = [
  {
    name: "國立歷史博物館 — 常設展全面升級",
    type: "博物館",
    desc: "導入 AI 語音導覽取代傳統導覽機，涵蓋 320 件館藏，支援 8 種語言，大幅降低設備維護成本。",
    stats: [
      { value: "+67%", label: "導覽使用率" },
      { value: "8 語系", label: "多語導覽" },
      { value: "-40%", label: "設備成本" },
    ],
  },
  {
    name: "日月潭國家風景區 — 智慧湖畔導覽",
    type: "觀光景區",
    desc: "結合 GPS 定位的戶外語音導覽系統，覆蓋環湖步道 12 個導覽站點，搭配 AI 即時解說。",
    stats: [
      { value: "12 站", label: "導覽站點" },
      { value: "+89%", label: "旅客滿意度" },
      { value: "5 語系", label: "多語導覽" },
    ],
  },
  {
    name: "臺北市觀光傳播局 — 城市漫步路線",
    type: "政府單位",
    desc: "為觀光局打造 5 條城市漫步語音導覽路線，涵蓋歷史街區、美食巷弄、文化地標。",
    stats: [
      { value: "5 條", label: "導覽路線" },
      { value: "32 站", label: "導覽站點" },
      { value: "6 語系", label: "多語導覽" },
    ],
  },
  {
    name: "高雄市立美術館 — 特展互動導覽",
    type: "美術館",
    desc: "國際特展搭配 AI 導覽，觀眾可即時提問藝術家創作背景，並獲得個人化參觀路線推薦。",
    stats: [
      { value: "+120%", label: "互動率提升" },
      { value: "4.8★", label: "觀眾評分" },
      { value: "3 萬+", label: "特展使用" },
    ],
  },
  {
    name: "臺南赤崁文化園區 — 古蹟復刻之旅",
    type: "文化園區",
    desc: "結合語音導覽重現 400 年歷史場景。訪客掃描古蹟即可聆聽故事，搭配 AI 深度問答。",
    stats: [
      { value: "15 站", label: "導覽站點" },
      { value: "+200%", label: "停留時間" },
      { value: "4.9★", label: "Google 評價" },
    ],
  },
  {
    name: "阿里山國家風景區 — 生態步道導覽",
    type: "風景區",
    desc: "為高山步道設計離線語音導覽，即使無網路也能使用。搭配生態辨識功能，拍照即可識別動植物。",
    stats: [
      { value: "離線可用", label: "無網路支援" },
      { value: "+45%", label: "使用率成長" },
      { value: "3 語系", label: "多語導覽" },
    ],
  },
];

const tabs = ["全部", "博物館 / 美術館", "觀光景區", "政府單位", "文化園區"];

function matchTab(tab: string, type: string) {
  if (tab === "全部") return true;
  if (tab === "博物館 / 美術館") return type === "博物館" || type === "美術館";
  if (tab === "觀光景區") return type === "觀光景區" || type === "風景區";
  if (tab === "政府單位") return type === "政府單位";
  if (tab === "文化園區") return type === "文化園區";
  return false;
}

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("全部");
  const filtered = cases.filter((c) => matchTab(activeTab, c.type));

  return (
    <section id="cases" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="ads-label-medium text-primary">成功案例</span>
          </div>
          <h2 className="ads-display-small text-on-surface mb-5">
            從博物館到國家風景區，<em className="not-italic text-primary">每一個場域</em>都有專屬解法
          </h2>
          <p className="ads-body-large text-on-surface-variant max-w-2xl mx-auto">
            看看不同類型的場域如何運用 GoTour 提升訪客體驗與營運效率。
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-5 py-2.5 rounded-full ads-label-large transition-all duration-300 ${
                activeTab === t
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {t}
            </button>
          ))}
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <div
              key={c.name}
              className="group rounded-2xl overflow-hidden bg-surface border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
              style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.1}s both` }}
            >
              {/* SVG illustration */}
              <div className="relative h-44 overflow-hidden">
                <CaseIllustration type={c.type} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-surface/80 backdrop-blur-sm ads-label-medium text-on-surface-variant">
                    {c.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="ads-title-medium text-on-surface mb-3">{c.name}</h3>
                <p className="ads-body-small text-on-surface-hint mb-5">{c.desc}</p>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-outline-variant/20">
                  {c.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="ads-title-small text-primary">{s.value}</div>
                      <div className="ads-label-small text-on-surface-hint">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
