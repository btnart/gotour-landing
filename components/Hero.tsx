"use client";

import { useEffect, useRef } from "react";
import { AnimatedCounter } from "./useScrollReveal";

function AnimatedWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const barCount = 40;
    const barWidth = W / barCount * 0.6;
    const gap = W / barCount * 0.4;
    const played = 0.35; // 35% played

    let frame: number;
    function draw(t: number) {
      ctx!.clearRect(0, 0, W, H);
      for (let i = 0; i < barCount; i++) {
        const x = i * (barWidth + gap) + gap / 2;
        // Pseudo-random but deterministic height per bar
        const seed = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
        const baseH = 0.3 + (seed - Math.floor(seed)) * 0.7;
        // Animate active bars
        const isPlayed = i / barCount < played;
        const animOffset = isPlayed ? Math.sin(t / 600 + i * 0.3) * 0.15 : 0;
        const h = (baseH + animOffset) * H * 0.8;

        ctx!.fillStyle = isPlayed ? "#BA9972" : "rgba(133,133,133,0.3)";
        ctx!.beginPath();
        ctx!.roundRect(x, (H - h) / 2, barWidth, h, 2);
        ctx!.fill();
      }
      frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} width={300} height={40} className="w-full h-8" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(186,153,114,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(186,153,114,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28 flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left animate-[fadeSlideUp_0.8s_ease_forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="ads-label-medium text-primary-fixed">AI-Powered Audio Guide</span>
          </div>

          <h1 className="ads-display-medium text-on-surface mb-8">
            讓每位訪客
            <br />
            都擁有專屬<em className="not-italic text-primary">導覽員</em>
          </h1>

          <p className="ads-body-large text-on-surface-variant max-w-xl mb-12">
            GoTour 結合 AI 智慧語音導覽與即時客服系統，為博物館、美術館、觀光景區及政府場館打造次世代導覽體驗。不需硬體投資，最快一個月內上線。
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
            <a href="#contact" className="px-8 py-4 bg-primary text-on-primary rounded-full ads-label-large hover:brightness-110 transition-all shadow-lg shadow-primary/20">
              免費預約展示 →
            </a>
            <a href="#cases" className="px-8 py-4 border border-outline-variant text-on-surface-variant rounded-full ads-label-large hover:bg-surface-container hover:text-on-surface transition-all">
              查看成功案例
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            <span className="ads-label-medium text-on-surface-hint">受信賴於：</span>
            {["國立故宮博物院", "交通部觀光署", "日月潭風管處"].map((name) => (
              <span key={name} className="px-3 py-1 rounded-full border border-outline-variant/40 ads-label-medium text-on-surface-variant">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Phone Mockup — proper 9:19.5 ratio */}
        <div className="flex-shrink-0 w-[280px] animate-[fadeSlideUp_0.8s_ease_0.3s_both] relative">
          {/* Phone frame */}
          <div className="rounded-[36px] bg-surface-container border border-outline-variant/30 p-3 shadow-2xl shadow-black/50" style={{ aspectRatio: "9/19" }}>
            {/* Dynamic Island */}
            <div className="flex justify-center mb-2">
              <div className="w-20 h-5 rounded-full bg-background" />
            </div>

            <div className="flex flex-col gap-2.5 h-[calc(100%-28px)]">
              {/* App header */}
              <div className="rounded-xl bg-surface-container-high px-4 py-3">
                <div className="ads-label-small text-on-surface-hint mb-0.5">日月潭國家風景區</div>
                <div className="ads-title-small text-on-surface">水社碼頭的故事</div>
              </div>

              {/* Scene illustration */}
              <div className="rounded-xl overflow-hidden flex-1 min-h-0 relative">
                {/* Sky */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E1812] via-[#2C241B] to-[#3B3024]" />
                {/* Stars */}
                <div className="absolute top-3 left-6 w-1 h-1 rounded-full bg-[#DDB586] opacity-40" />
                <div className="absolute top-5 left-16 w-0.5 h-0.5 rounded-full bg-[#DDB586] opacity-30" />
                <div className="absolute top-2 right-20 w-0.5 h-0.5 rounded-full bg-[#DDB586] opacity-25" />
                {/* Moon */}
                <div className="absolute top-4 right-8 w-8 h-8 rounded-full bg-[#DDB586] shadow-[0_0_16px_rgba(221,181,134,0.4)]" />
                <div className="absolute top-[17px] right-[33px] w-6 h-6 rounded-full bg-[#2C241B]" />
                {/* Mountains */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 260 80" className="w-full" preserveAspectRatio="none">
                    <polygon points="0,80 40,25 90,55 140,15 200,45 260,80" fill="#504131" opacity="0.6" />
                    <polygon points="0,80 60,40 120,60 180,30 230,55 260,80" fill="#3B3024" opacity="0.8" />
                    <polygon points="0,80 30,55 80,70 130,50 180,65 220,55 260,80" fill="#2C241B" />
                    {/* Lake */}
                    <rect x="0" y="68" width="260" height="12" fill="#1E1812" opacity="0.6" />
                    <line x1="30" y1="72" x2="70" y2="72" stroke="#BA9972" strokeWidth="0.5" opacity="0.15" />
                    <line x1="120" y1="74" x2="170" y2="74" stroke="#BA9972" strokeWidth="0.5" opacity="0.1" />
                  </svg>
                </div>
              </div>

              {/* Waveform + time */}
              <div className="px-1">
                <AnimatedWaveform />
                <div className="flex justify-between ads-label-small text-on-surface-hint mt-1">
                  <span>1:24</span>
                  <span>4:38</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#858585" strokeWidth="2"><polygon points="19,20 9,12 19,4" /><line x1="5" y1="19" x2="5" y2="5" /></svg>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0F0C09"><polygon points="6,4 20,12 6,20" /></svg>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#858585" strokeWidth="2"><polygon points="5,4 15,12 5,20" /><line x1="19" y1="5" x2="19" y2="19" /></svg>
              </div>

              {/* AI prompt */}
              <div className="rounded-xl bg-primary/10 border border-primary/20 px-3 py-2.5 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 text-[10px] font-semibold text-on-primary">AI</div>
                <span className="ads-label-small text-on-surface-variant">有任何問題嗎？點此詢問 AI 導覽員</span>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pt-1 pb-1">
                <div className="w-24 h-1 rounded-full bg-on-surface-hint/30" />
              </div>
            </div>
          </div>

          {/* Floating: Language card (top-right, diagonal) */}
          <div className="absolute -right-8 top-6 rounded-xl bg-surface-container border border-outline-variant/30 px-4 py-3 shadow-xl shadow-black/30 animate-[float_4s_ease-in-out_infinite]">
            <div className="ads-label-small text-on-surface-hint mb-2">支援語言</div>
            <div className="flex gap-1 text-sm">🇹🇼 🇺🇸 🇯🇵 🇰🇷 🇫🇷 🇹🇭</div>
          </div>

          {/* Floating: Stats card (bottom-left, diagonal) */}
          <div className="absolute -left-12 bottom-24 rounded-xl bg-surface-container border border-outline-variant/30 px-4 py-3 shadow-xl shadow-black/30 animate-[float_3s_ease-in-out_0.5s_infinite]">
            <div className="ads-label-small text-on-surface-hint mb-1">本月導覽次數</div>
            <div className="ads-headline-medium text-primary">12,847</div>
            <div className="ads-label-small text-success">↑ 34% vs 上月</div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-md border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 50, suffix: "+", label: "合作場域" },
            { target: 200, suffix: "萬+", label: "累計導覽人次" },
            { target: 15, suffix: "+", label: "支援語言數" },
            { target: 98, suffix: "%", label: "客戶滿意度" },
          ].map((s) => (
            <div key={s.label}>
              <div className="ads-headline-medium text-primary">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="ads-label-small text-on-surface-hint">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
