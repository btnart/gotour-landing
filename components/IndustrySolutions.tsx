const solutions = [
  {
    industry: "博物館 & 美術館",
    tagline: "讓藝術品開口說故事",
    desc: "為每件展品打造身歷其境的語音解說，搭配 AI 互動問答，讓訪客深度理解作品背後的故事與藝術價值。",
    highlights: ["展品自動觸發解說", "策展人語音內容", "互動問答體驗", "多語即時翻譯"],
    gradient: "from-[#BA9972]/20 via-[#7A654B]/10 to-transparent",
    image: "/images/case-museum.svg",
  },
  {
    industry: "觀光景點 & 旅遊業",
    tagline: "讓旅程不再走馬看花",
    desc: "戶外景點 GPS 定位導覽，搭配推薦路線與在地故事，為旅客打造沉浸式旅遊體驗，提升景區回訪率。",
    highlights: ["GPS 定位導覽", "推薦遊覽路線", "在地故事導覽", "旅客行為分析"],
    gradient: "from-[#82D28A]/20 via-[#00390F]/10 to-transparent",
    image: "/images/case-tourism.svg",
  },
  {
    industry: "政府單位 & 觀光局",
    tagline: "城市就是最大的展覽館",
    desc: "為城市觀光打造數位導覽基礎設施，串聯各景點與文化資產，提升國際旅客體驗，推動在地觀光產業。",
    highlights: ["城市導覽系統", "文化資產數位化", "觀光數據分析", "多機關協作平台"],
    gradient: "from-[#EFCE5A]/20 via-[#534300]/10 to-transparent",
    image: "/images/case-government.svg",
  },
];

export default function IndustrySolutions() {
  return (
    <section id="solutions" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs text-primary font-medium">
              產業解決方案
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface mb-4">
            為不同產業量身打造
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            無論是室內展館還是戶外景點，GoTour 都能提供最適合的解決方案
          </p>
        </div>

        <div className="space-y-8">
          {solutions.map((s, i) => (
            <div
              key={s.industry}
              className={`relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/20 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`}
              />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                {/* Content */}
                <div
                  className={`flex-1 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/50 mb-4">
                    <span className="text-xs text-on-surface-variant font-medium">
                      {s.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-on-surface mb-3">
                    {s.tagline}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {s.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2 text-sm text-on-surface-variant"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-primary shrink-0"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image placeholder */}
                <div
                  className={`flex-1 ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="aspect-[4/3] rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.industry}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
