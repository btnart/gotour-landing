export default function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill="#0F0C09"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="#BA9972" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-on-surface">
                GoTour
              </span>
            </div>
            <p className="text-sm text-on-surface-hint leading-relaxed">
              AI 驅動的智慧語音導覽服務，讓每一次參觀都成為難忘的體驗。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-on-surface mb-4">
              產品
            </h4>
            <ul className="space-y-2">
              {["語音導覽", "AI 客服", "數據分析", "內容管理"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-on-surface-hint hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-on-surface mb-4">
              解決方案
            </h4>
            <ul className="space-y-2">
              {["博物館", "美術館", "觀光景點", "政府單位"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-on-surface-hint hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-on-surface mb-4">
              聯繫我們
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-hint">
              <li>service@gotour.com.tw</li>
              <li>02-2345-6789</li>
              <li>台北市信義區信義路五段 7 號</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface-hint">
            &copy; 2026 GoTour by ARTOGO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["隱私政策", "服務條款", "使用規範"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-on-surface-hint hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
