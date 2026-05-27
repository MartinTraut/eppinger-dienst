"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/shared/brand-mark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "translate-y-0 border-b border-border/70 bg-background/95 backdrop-blur-xl"
          : "-translate-y-full",
      )}
    >
      <div className="container-x flex h-[88px] items-center justify-between md:h-[108px]">
        <Link
          href="/"
          aria-label="Eppinger, Startseite"
          className="flex items-center py-1"
        >
          <BrandMark
            width={300}
            className="h-[56px] w-auto md:h-[72px]"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-foreground/65 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
            className="hidden text-[13px] font-medium text-foreground transition-colors hover:text-brand md:inline-block"
          >
            {site.contact.phonePrimaryLabel}
          </a>
          <button
            aria-label="Menü öffnen"
            className="grid size-10 place-items-center rounded-full border border-border/70 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-border/40"
      >
        <div
          className="h-full origin-left bg-brand transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-[92%] max-w-md flex-col bg-background p-7 shadow-2xl transition-transform duration-500 ease-[var(--ease)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-14 flex items-center justify-between">
            <BrandMark width={120} />
            <button
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-full border border-border/70"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-5 font-display text-3xl font-bold text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <a
              href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
              className="block font-display text-3xl font-bold text-foreground"
            >
              {site.contact.phonePrimaryLabel}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-3 block text-[14px] text-muted-foreground"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
