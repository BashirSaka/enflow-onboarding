import React from "react";

const TOOLS = [
  {
    name: "POS",
    sub: "Square · Toast · Local",
    icon: "💳",
    tileColor: "#E07B2E",
    highlight: true,
  },
  {
    name: "WhatsApp Business",
    sub: "Auto-reply & order alerts",
    icon: "💬",
    tileColor: "#E07B2E",
  },
  {
    name: "Instagram/Facebook",
    sub: "DMs, comments, Ads",
    icon: "📷",
    tileColor: "#E07B2E",
  },
  {
    name: "Google Reviews",
    sub: "Monitor & auto-respond",
    icon: "⭐",
    tileColor: "#E07B2E",
  },
  {
    name: "Delivery",
    sub: "Chowdeck · Glovo · Bolt Food",
    icon: "📦",
    tileColor: "#E07B2E",
  },
  {
    name: "Accounting",
    sub: "QuickBooks · Zoho",
    icon: "🧾",
    tileColor: "#E07B2E",
  },
];

export default function StepConnectTools({ data, onChange }) {
  const connected = data.connectedTools || [];

  const toggleConnect = (name) => {
    const next = connected.includes(name)
      ? connected.filter((x) => x !== name)
      : [...connected, name];
    onChange("connectedTools", next);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">
        Connect the tools you already use.
      </h1>
      <p className="text-sm text-ink-muted mb-5">
        Optional — you can skip and add later. Your POS is the most useful
        first.
      </p>

      <div className="space-y-3 mb-2">
        {TOOLS.map((tool) => {
          const isConnected = connected.includes(tool.name);
          return (
            <div
              key={tool.name}
              className={`flex items-center justify-between border rounded-xl px-4 py-3.5 ${
                tool.highlight ? "border-accent" : "border-border-warm"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                  style={{ backgroundColor: tool.tileColor }}
                >
                  <span>{tool.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">
                    {tool.name}
                  </div>
                  <div className="text-xs text-ink-muted">{tool.sub}</div>
                </div>
              </div>
              <button
                onClick={() => toggleConnect(tool.name)}
                className={`text-xs font-medium rounded-lg px-3.5 py-2 border transition-colors ${
                  isConnected
                    ? "bg-accent-gradient text-white border-transparent"
                    : "bg-transparent border-border-input text-ink hover:border-accent"
                }`}
              >
                {isConnected ? "Connected" : "Connect"}
              </button>
            </div>
          );
        })}
      </div>

      <p className="text-sm text-accent-light cursor-pointer mt-2">
        + Request a new integration
      </p>
    </div>
  );
}
