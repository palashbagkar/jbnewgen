"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { nav, pillars } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

const HERO_MAX_BLUR_PX = 12;
const HERO_HEADER_PX = 64;
const HERO_REVEAL_START = 0.8;
const HERO_DARK_RGB = "21, 25, 37";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [overHero, setOverHero] = useState(isHome);
  const [blurPx, setBlurPx] = useState(0);
  const [bgAlpha, setBgAlpha] = useState(0);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Layout tracking refs
  const contactRef = useRef<HTMLAnchorElement | HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (!isHome) {
      setOverHero(false);
      setBlurPx(0);
      setBgAlpha(0);
      return;
    }

    let raf = 0;
    const update = () => {
      const heroEl = document.getElementById("hero");
      const heroHeight = heroEl?.offsetHeight || window.innerHeight;
      const progress = Math.min(1, Math.max(0, (window.scrollY + HERO_HEADER_PX) / heroHeight));

      if (progress <= HERO_REVEAL_START) {
        setBlurPx((progress / HERO_REVEAL_START) * HERO_MAX_BLUR_PX);
        setBgAlpha(0);
      } else {
        const t = (progress - HERO_REVEAL_START) / (1 - HERO_REVEAL_START);
        setBlurPx((1 - t) * HERO_MAX_BLUR_PX);
        setBgAlpha(t);
      }
      setOverHero(progress < 1);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  // Recalculate horizontal distance dynamically across layout/aspect structural shifts
  useEffect(() => {
    const updateLineDimensions = () => {
      if (contactRef.current && actionsRef.current) {
        const contactRect = contactRef.current.getBoundingClientRect();
        const actionsRect = actionsRef.current.getBoundingClientRect();
        const derivedWidth = actionsRect.right - contactRect.right;
        setLineWidth(derivedWidth);
      }
    };

    updateLineDimensions();
    window.addEventListener("resize", updateLineDimensions, { passive: true });
    return () => window.removeEventListener("resize", updateLineDimensions);
  }, []);

  // Auto-focus input when search triggers
  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle routing on Enter keypress
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const clear = overHero && !open;

  const linkClass = (href: string) =>
    cn(
      "rounded-[7px] px-4 py-2 text-[0.95rem] font-medium transition-colors",
      isActive(href)
        ? clear
          ? "text-flame-400"
          : "text-flame-600"
        : clear
          ? "text-white/85 hover:text-white"
          : "text-ink-700 hover:text-ink-950",
    );

  return (
    <header className="sticky top-0 z-50">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes dropOut {
          0% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
          100% { transform: translateY(32px); }
        }
        @keyframes slideIn {
          0% { transform: translateY(32px); }
          100% { transform: translateY(0); }
        }
        @keyframes lineExtend {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes lineRetract {
          0% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        .anim-drop-out {
          animation: dropOut 0.38s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .anim-slide-in {
          animation: slideIn 0.38s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .anim-line-extend {
          animation: lineExtend 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .anim-line-retract {
          animation: lineRetract 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}} />

      <div className="relative">
        {/* Scroll-tied layer */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundColor: `rgba(${HERO_DARK_RGB}, ${bgAlpha})`,
            backdropFilter: `blur(${blurPx}px)`,
            WebkitBackdropFilter: `blur(${blurPx}px)`,
          }}
        />
        {/* Solid white layer */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-white transition-opacity duration-500",
            clear ? "opacity-0" : "opacity-100",
          )}
        />

        {/* Main Header Container */}
        <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <Link href="/" aria-label="JBNewGen home" className="shrink-0">
            <Logo light={clear} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => {
              const isContact = item.label === "Contact";
              if (!item.type) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={linkClass(item.href)}
                    ref={isContact ? (contactRef as React.RefObject<HTMLAnchorElement>) : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div
                  key={item.label}
                  className="group static lg:relative"
                  ref={isContact ? (contactRef as React.RefObject<HTMLDivElement>) : undefined}
                >
                  <Link
                    href={item.href}
                    className={cn(linkClass(item.href), "inline-flex items-center gap-1")}
                  >
                    {item.label}
                    <Icon name="chevronDown" size={15} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {item.type === "dropdown" && item.children && (
                    <div className="invisible absolute left-0 top-full z-40 w-80 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="card overflow-hidden p-2">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-ink-50">
                            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-flame-500/15 to-flame-500/15 text-flame-600">
                              <Icon name="arrowUpRight" size={16} />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-ink-900">{c.label}</span>
                              {c.desc && <span className="mt-0.5 block text-xs text-ink-500">{c.desc}</span>}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.type === "mega" && (
                    <div className="invisible absolute left-1/2 top-full z-40 w-[min(64rem,94vw)] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="card p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
                            Services · 4 pillars · {pillars.reduce((n, p) => n + p.services.length, 0)} sub-services
                          </span>
                          <Link href="/services" className="text-xs font-semibold text-flame-600 hover:underline">
                            View all services →
                          </Link>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                          {pillars.map((p) => (
                            <div key={p.slug} className="rounded-xl bg-ink-50/60 p-3">
                              <Link href={`/services/${p.slug}`} className="group/hub flex items-start gap-2">
                                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-flame-600 shadow-sm ring-1 ring-inset ring-flame-500/15">
                                  <Icon name={p.icon} size={16} />
                                </span>
                                <span className="text-[0.8rem] font-bold leading-tight text-ink-900 group-hover/hub:text-flame-600">
                                  {p.short}
                                </span>
                              </Link>
                              <ul className="mt-3 space-y-1 border-l border-ink-200 pl-3">
                                {p.services.map((s) => (
                                  <li key={s.slug}>
                                    <Link href={`/services/${p.slug}/${s.slug}`} className="block rounded-md px-2 py-1 text-[0.78rem] text-ink-600 transition-colors hover:bg-white hover:text-flame-600">
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions Wrapper */}
          <div ref={actionsRef} className="relative flex items-center gap-2">
            {/* Context-Aware Animated Text Input Field */}
            <input
              ref={inputRef}
              type="text"
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className={cn(
                "absolute bottom-[3px] right-0 h-7 bg-transparent pr-9 text-left text-[0.95rem] font-medium outline-none transition-all duration-300 border-none hidden lg:block",
                searchOpen
                  ? "opacity-100 pointer-events-auto translate-y-0"
                  : "opacity-0 pointer-events-none translate-y-1",
                clear
                  ? "text-white/85 placeholder:text-white/40"
                  : "text-ink-700 placeholder:text-ink-400"
              )}
              style={{ width: `${lineWidth}px` }}
            />

            {/* Context-Aware Animated Tracking Line */}
            <div
              className={cn(
                "absolute bottom-0 right-0 h-[1.5px] origin-right pointer-events-none hidden lg:block",
                hasInteracted && (searchOpen ? "anim-line-extend" : "anim-line-retract"),
                !hasInteracted && "scale-x-0",
                clear ? "bg-white/85" : "bg-ink-700"
              )}
              style={{ width: `${lineWidth}px` }}
            />

            {/* Animated Search Toggle Action Button - Isolated to Tablet/Desktop */}
            <button
              type="button"
              aria-label="Toggle search view"
              onClick={() => {
                setSearchOpen((v) => !v);
                setHasInteracted(true);
              }}
              className={cn(
                "relative z-10 h-8 w-8 overflow-hidden bg-transparent outline-none focus:outline-none select-none border-none hidden lg:block",
                clear ? "text-white/85 hover:text-white" : "text-ink-700 hover:text-ink-950"
              )}
            >
              {/* Search Icon Element */}
              <span
                className={cn(
                  "absolute inset-0 grid place-items-center",
                  hasInteracted && (searchOpen ? "anim-drop-out" : "anim-slide-in")
                )}
              >
                <Icon name="search" size={20} />
              </span>

              {/* Close (X) Icon Element */}
              <span
                className={cn(
                  "absolute inset-0 grid place-items-center",
                  hasInteracted && (searchOpen ? "anim-slide-in" : "anim-drop-out")
                )}
                style={!hasInteracted ? { transform: "translateY(32px)" } : undefined}
              >
                <Icon name="close" size={20} />
              </span>
            </button>

            {/* Mobile Native Navigation Trigger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "grid h-11 w-11 place-items-center rounded-xl ring-1 ring-inset transition-colors lg:hidden focus:outline-none",
                clear ? "text-white ring-white/30" : "text-ink-800 ring-ink-200",
              )}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top overflow-y-auto bg-white transition-all duration-300 lg:hidden",
          open ? "max-h-[calc(100dvh-4rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-3 sm:px-8">
          {/* Functional Mobile Native Search Layout Container */}
          <form action="/search" role="search" className="mb-4 flex items-center gap-2 rounded-[7px] border border-ink-200 px-4 py-2.5">
            <Icon name="search" size={18} className="text-ink-400" />
            <input type="search" name="q" placeholder="Search pages…" className="w-full bg-transparent text-ink-900 outline-none placeholder:text-ink-400" />
          </form>

          <nav>
            {nav.map((item) => (
              <div key={item.label} className="border-b border-ink-100">
                {item.type ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} className="py-4 text-lg font-semibold text-ink-900">
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={`Expand ${item.label}`}
                        onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                        className="grid h-10 w-10 place-items-center rounded-lg text-ink-500 focus:outline-none"
                      >
                        <Icon name="chevronDown" size={18} className={cn("transition-transform", expanded === item.label && "rotate-180")} />
                      </button>
                    </div>
                    <div className={cn("overflow-hidden transition-all duration-300", expanded === item.label ? "max-h-[40rem] pb-3" : "max-h-0")}>
                      {item.type === "mega"
                        ? pillars.map((p) => (
                          <div key={p.slug} className="mb-2">
                            <Link href={`/services/${p.slug}`} className="block rounded-lg px-3 py-2 text-sm font-bold text-ink-800">
                              {p.short}
                            </Link>
                            <div className="border-l border-ink-100 pl-3">
                              {p.services.map((s) => (
                                <Link key={s.slug} href={`/services/${p.slug}/${s.slug}`} className="block rounded-lg px-3 py-1.5 text-[0.9rem] text-ink-600">
                                  {s.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                        : item.children?.map((c) => (
                          <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-600">
                            {c.label}
                          </Link>
                        ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="block py-4 text-lg font-semibold text-ink-900">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Link href="/quote" className="mt-6 flex w-full items-center justify-center rounded-[7px] bg-flame-500 px-5 py-3.5 text-base font-semibold text-white">
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}