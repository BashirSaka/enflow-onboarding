import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

const INDUSTRIES = [
  { name: "Restaurant", available: true, image: image1 },
  { name: "Fast Food", available: true, image: image2 },
  { name: "Lounge / Bar", available: true, image: image3 },
  { name: "Hotel", available: false, image: image4 },
  { name: "Clinic", available: false, image: image5 },
  { name: "Ticketing & Events", available: false, image: image6 },
];

const SUBTYPES = [
  "Dine-in",
  "Takeaway",
  "Delivery",
  "Cloud kitchen",
  "Multi-branch",
];

export default function StepChooseIndustry({ data, onChange }) {
  const selected = data.industry || "Restaurant";
  const subtypes = data.subtypes || ["Dine-in"];

  const toggleSubtype = (s) => {
    const next = subtypes.includes(s)
      ? subtypes.filter((x) => x !== s)
      : [...subtypes, s];
    onChange("subtypes", next);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">
        What kind of business are you running?
      </h1>
      <p className="text-sm text-ink-muted mb-5">
        Restaurant is selected by default — Enflow's first vertical.
      </p>

      <div className="space-y-4 mb-6">
        {INDUSTRIES.map((ind) => {
          const isSelected = selected === ind.name;
          return (
            <button
              key={ind.name}
              disabled={!ind.available}
              onClick={() => ind.available && onChange("industry", ind.name)}
              className={`w-full text-left border rounded-xl overflow-hidden transition-colors ${
                isSelected ? "border-accent" : "border-border-warm"
              } ${!ind.available ? "opacity-50 cursor-not-allowed" : "hover:border-accent/60"}`}
            >
              {/* Header row: name + badge */}
              <div className="flex items-center justify-between px-4 pt-3 pb-2">
                <span className="text-sm font-medium text-ink">{ind.name}</span>
                <span
                  className={`text-[11px] font-medium rounded-full px-2.5 py-1 ${
                    ind.available
                      ? "bg-accent-gradient text-white"
                      : "bg-bg-panel text-ink-muted border border-border-warm"
                  }`}
                >
                  {ind.available ? "Available" : "Coming soon"}
                </span>
              </div>

              {/* Image thumbnail */}
              <div className="px-4 pb-3">
                <div className="aspect-[16/7] rounded-lg overflow-hidden bg-bg-input border border-border-warm flex items-center justify-center">
                  {ind.image ? (
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-ink-muted">
                      {ind.name} photo
                    </span>
                  )}
                </div>
              </div>

              {isSelected && (
                <div className="px-4 pb-3 -mt-1">
                  <span className="text-xs text-accent-light flex items-center gap-1">
                    ✓ Selected
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-xs text-ink-muted mb-2">
        SUB-TYPE ({selected.toUpperCase()})
      </div>
      <div className="flex flex-wrap gap-2">
        {SUBTYPES.map((s) => {
          const active = subtypes.includes(s);
          return (
            <button
              key={s}
              onClick={() => toggleSubtype(s)}
              className={`text-xs rounded-full px-3 py-1.5 border transition-colors ${
                active
                  ? "border-accent bg-accent/10 text-accent-light"
                  : "border-border-warm text-ink-muted"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
}
