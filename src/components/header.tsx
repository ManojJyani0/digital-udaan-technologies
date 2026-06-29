"use client";

import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">D</span>
          <span className="text-white/80">igital </span>
          <span className="text-gradient">U</span>
          <span className="text-white/80">daan </span>
          <span className="text-gradient">T</span>
          <span className="text-white/80">echnologies</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
          >
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 rounded bg-white transition-all ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-white transition-all ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-white transition-all ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="glass-strong flex flex-col items-center gap-4 px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
