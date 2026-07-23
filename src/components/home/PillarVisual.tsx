"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

function useReveal() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), 80);
    return () => clearTimeout(t);
  }, []);
  return on;
}

/** App-window chrome with a soft brand glow. */
function Screen({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 shadow-[0_30px_70px_-34px_rgba(0,0,0,0.75)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-flame-500/[0.06] via-transparent to-azure-500/[0.07]" />

      {/* title bar */}
      <div className="relative flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-[7px] bg-white/70" />
        <span className="h-2.5 w-2.5 rounded-[7px] bg-flame-500/70" />
        <span className="h-2.5 w-2.5 rounded-[7px] bg-azure-500/70" />
        <span className="ml-2 font-mono text-[0.7rem] uppercase tracking-widest text-ink-400">{label}</span>
      </div>

      <div className="relative p-5">{children}</div>
    </div>
  );
}

/* 1 · Business Consultancy - channel reach across India's tiers (illustrative bars) */
function ReachVisual() {
  const on = useReveal();
  const rows = [
    { k: "Metro", v: 92 },
    { k: "Tier 1", v: 78 },
    { k: "Tier 2", v: 64 },
    { k: "Tier 3", v: 44 },
  ];
  return (
    <Screen label="Channel reach across India">
      <div className="space-y-3.5">
        {rows.map((r, i) => (
          <div key={r.k} className="flex items-center gap-3">
            <span className="w-12 shrink-0 text-xs font-medium text-ink-200">{r.k}</span>
            <div className="relative h-3 flex-1 overflow-hidden rounded-[7px] bg-white/[0.06] ring-1 ring-inset ring-white/5">
              <div
                className="relative h-full overflow-hidden rounded-[7px] bg-gradient-to-r from-flame-500 via-flame-400 to-azure-500 transition-[width] duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ width: on ? `${r.v}%` : "0%", transitionDelay: `${i * 120}ms` }}
              >
                <span
                  className="absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
                  style={{ animationDelay: `${i * 120 + 800}ms` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-flame-500/10 to-transparent px-4 py-3">
          <div className="text-xl font-bold text-gradient-brand">7,000+</div>
          <div className="text-xs text-ink-300">channel partners</div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-azure-500/10 to-transparent px-4 py-3">
          <div className="text-xl font-bold text-gradient-brand">30,000+</div>
          <div className="text-xs text-ink-300">retail touchpoints</div>
        </div>
      </div>
    </Screen>
  );
}

/* 2 · Tech Readiness - India Stack Integration Gateway */
function TopologyVisual() {
  const on = useReveal();
  const gateways = [
    { label: "UPI Payments", sub: "Merchant gateway", status: "Active", uptime: "99.98%", icon: "creditCard" as const },
    { label: "Aadhaar e-KYC", sub: "UIDAI auth API", status: "Verified", uptime: "99.95%", icon: "shield" as const },
  ];

  return (
    <Screen label="India Stack Gateway · Active APIs">
      <div className="grid grid-cols-2 gap-2.5">
        {gateways.map((g, i) => (
          <div
            key={g.label}
            className={cn(
              "relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-all duration-500",
              on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-flame-500/10 to-azure-500/10 text-azure-300 ring-1 ring-white/10">
                <Icon name={g.icon} size={14} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[0.7rem] font-bold leading-tight text-white truncate">{g.label}</div>
                <div className="text-[0.58rem] leading-none text-ink-400 truncate mt-0.5">{g.sub}</div>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-white/5 pt-1.5 text-[0.58rem]">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                {g.status}
              </span>
              <span className="font-mono text-ink-400">{g.uptime}</span>
            </div>
          </div>
        ))}
      </div>

      {/* API Console log */}
      <div className={cn(
        "mt-3.5 rounded-xl border border-white/5 bg-ink-950/80 p-2.5 font-mono text-[0.58rem] leading-normal text-emerald-400/80 transition-all duration-700",
        on ? "opacity-100" : "opacity-0"
      )}
      style={{ transitionDelay: "400ms" }}
      >
        <div className="flex items-center justify-between border-b border-white/5 pb-1 mb-1 text-[0.55rem] text-ink-400 uppercase tracking-wider font-semibold">
          <span>Gateway Request Stream</span>
          <span className="flex items-center gap-1 text-emerald-500 font-bold">
            <span className="h-1 w-1 rounded-full bg-emerald-500 animate-ping" />
            Live
          </span>
        </div>
        <div className="space-y-0.5 text-left">
          <div className="truncate"><span className="text-ink-400">[12:48:42]</span> <span className="text-azure-400 font-semibold">POST</span> /api/v1/upi/pay <span className="text-emerald-400 font-bold">200 OK</span> <span className="text-ink-500">12ms</span></div>
          <div className="truncate"><span className="text-ink-400">[12:48:44]</span> <span className="text-azure-400 font-semibold">POST</span> /api/v2/kyc/verify <span className="text-emerald-400 font-bold">200 OK</span> <span className="text-ink-500">45ms</span></div>
        </div>
      </div>
    </Screen>
  );
}

/* 3 · Visibility & Demand - illustrative growth curve (no data claims) */
function DemandVisual() {
  const on = useReveal();
  const pts = [8, 20, 16, 32, 44, 40, 58, 76, 92];
  const sx = 300 / (pts.length - 1);
  const W = 314;
  const H = 150;
  const y = (v: number) => 12 + (1 - v / 100) * 128;
  const coords = pts.map((v, i) => `${i * sx},${y(v)}`).join(" ");
  const lastX = (pts.length - 1) * sx;
  const area = `0,${H} ${coords} ${lastX},${H}`;

  return (
    <Screen label="Visibility & demand generation">
      <div className="relative overflow-hidden rounded-lg">
        <div className="pointer-events-none absolute inset-0 graph-grid opacity-70" />
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="relative h-[150px] w-full">
          <defs>
            <linearGradient id="demandArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(247,148,29)" stopOpacity="0.38" />
              <stop offset="100%" stopColor="rgb(7,149,254)" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="demandLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgb(247,148,29)" />
              <stop offset="100%" stopColor="rgb(56,182,255)" />
            </linearGradient>
          </defs>
          <polygon
            points={area}
            fill="url(#demandArea)"
            opacity={on ? 1 : 0}
            style={{ transition: "opacity 1s ease 0.35s" }}
          />
          <polyline
            points={coords}
            fill="none"
            stroke="url(#demandLine)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={on ? 0 : 1}
            style={{ transition: "stroke-dashoffset 1.5s ease" }}
          />
        </svg>
        <span
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-[7px] bg-flame-400 ring-4 ring-flame-400/25 transition-opacity duration-500"
          style={{ left: `${(lastX / W) * 100}%`, top: `${(y(pts[pts.length - 1]) / H) * 100}%`, opacity: on ? 1 : 0, transitionDelay: "1.3s" }}
        >
          <span className="absolute inset-0 animate-pulse rounded-[7px] bg-flame-400/60" />
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-ink-300">
        <Icon name="trending" size={18} className="text-emerald-400" />
        A predictable, growing lead pipeline
      </div>
    </Screen>
  );
}

/* 4 · CPaaS & Omnichannel - channels converging into one inbox */
function OmnichannelVisual() {
  const on = useReveal();
  const channels: { label: string; icon: IconName; tint: string; ring: string; dot: string }[] = [
    { label: "WhatsApp", icon: "chat", tint: "text-emerald-400", ring: "ring-emerald-400/25", dot: "bg-emerald-400" },
    { label: "SMS & RCS", icon: "mail", tint: "text-azure-400", ring: "ring-azure-400/25", dot: "bg-azure-400" },
    { label: "Voice", icon: "phone", tint: "text-flame-400", ring: "ring-flame-400/25", dot: "bg-flame-400" },
  ];
  return (
    <Screen label="Omnichannel · unified inbox">
      <div className="grid grid-cols-[1fr_auto_1.15fr] items-center gap-2">
        {/* channels */}
        <div className="space-y-1.5">
          {channels.map((c, i) => (
            <div
              key={c.label}
              className={cn(
                "flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1.5 ring-1 ring-inset transition-all duration-500",
                c.ring,
                on ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
              )}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              <Icon name={c.icon} size={16} className={c.tint} />
              <span className="text-xs text-ink-100">{c.label}</span>
            </div>
          ))}
        </div>

        {/* animated converging connectors */}
        <svg width="34" height="76" viewBox="0 0 34 76" className="overflow-visible">
          {[12, 38, 64].map((sy) => (
            <path
              key={sy}
              d={`M0 ${sy} C 17 ${sy}, 17 38, 34 38`}
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className={on ? "animate-dash" : ""}
            />
          ))}
        </svg>

        {/* unified inbox */}
        <div
          className={cn(
            "rounded-2xl border border-flame-400/20 bg-gradient-to-br from-flame-500/5 to-azure-500/5 p-2.5 transition-all duration-700",
            on ? "scale-100 opacity-100" : "scale-95 opacity-0",
          )}
          style={{ transitionDelay: "420ms" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-flame-500 to-azure-500 text-white">
              <Icon name="gauge" size={13} />
            </span>
            <span className="text-xs font-semibold text-white">Unified inbox</span>
          </div>
          <div className="mt-2.5 space-y-1">
            {channels.map((c, i) => (
              <div
                key={c.label}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg bg-white/[0.04] px-1.5 py-1 transition-all duration-500",
                  on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                )}
                style={{ transitionDelay: `${640 + i * 150}ms` }}
              >
                <span className={cn("h-1 w-1 shrink-0 rounded-full", c.dot)} />
                <div className="min-w-0 flex-1">
                  <span className="block h-1 w-full rounded-full bg-white/15" />
                  <span className="mt-1 block h-1 w-2/3 rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

export function PillarVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "business-consultancy":
      return <ReachVisual />;
    case "tech-readiness":
      return <TopologyVisual />;
    case "digital-marketing":
      return <DemandVisual />;
    case "cpaas-omnichannel":
      return <OmnichannelVisual />;
    default:
      return <ReachVisual />;
  }
}
