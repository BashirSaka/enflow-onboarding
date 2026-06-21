import React from "react";
import floorManagerImg from "../../assets/ai-floor-manager.jpg";

const PILLS = [
  "Restaurants",
  "Fast Food",
  "Hotels",
  "Lounges",
  "Clinics",
  "Events",
];
const FEATURES = [
  { icon: "⚙️", label: "Streamline Ops" },
  { icon: "😊", label: "Delight guests" },
  { icon: "📈", label: "Grow ROI" },
];

export default function StepFloorManager() {
  return (
    <div>
      <div className="border border-border-warm rounded-xl overflow-hidden bg-bg-input">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={floorManagerImg}
            alt="AI floor manager illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-base font-bold text-ink mb-1">
            Your AI Floor Manager
          </h2>
          <p className="text-sm text-ink-muted mb-4">
            Talks to guests. Watches sales. Files the reports.
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="bg-bg-panel border border-border-warm rounded-lg py-3 px-2 text-center"
              >
                <div className="text-lg mb-1">{f.icon}</div>
                <div className="text-xs text-ink-muted">{f.label}</div>
              </div>
            ))}
          </div>

          <div className="text-xs text-ink-muted mb-2">BUILT FOR</div>
          <div className="flex flex-wrap gap-2">
            {PILLS.map((p) => (
              <span
                key={p}
                className="text-xs text-accent-light border border-accent/30 bg-accent/10 rounded-full px-3 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
