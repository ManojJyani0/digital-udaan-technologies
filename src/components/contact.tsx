"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/yourFormID";

const contactInfo = [
  {
    label: "Email",
    value: "digitaludaan.tech@gmail.com",
    href: "mailto:digitaludaan.tech@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s <span className="text-gradient">Build Together</span>
          </h2>
          <p className="mt-4 text-white/50">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-5xl">
          <div className="glass-strong rounded-2xl p-8 md:p-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Get in Touch
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Whether you need a custom software solution, a mobile app, or
                  want to learn more about our products — we&apos;re here to
                  help.
                </p>

                <div className="mt-8 space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
                    >
                      <span className="text-white/30">{item.icon}</span>
                      {item.value}
                    </a>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm text-white/30">
                    Or reach out directly:
                  </p>
                  <a
                    href="mailto:digitaludaan.tech@gmail.com"
                    className="mt-2 inline-block text-sm text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    digitaludaan.tech@gmail.com
                  </a>
                </div>
              </div>

              <div>
                {status === "success" ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20">
                      <svg
                        className="h-8 w-8 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h4 className="mt-4 font-medium text-white">
                      Thank You!
                    </h4>
                    <p className="mt-2 text-sm text-white/50">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-sm text-indigo-400 transition-colors hover:text-indigo-300"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-white/60"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-indigo-500/50 focus:bg-white/10"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-white/60"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-indigo-500/50 focus:bg-white/10"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-white/60"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all focus:border-indigo-500/50 focus:bg-white/10"
                      >
                        <option value="" className="bg-[#0a0a0f]">
                          Select a subject
                        </option>
                        <option value="product-inquiry" className="bg-[#0a0a0f]">
                          Product Inquiry
                        </option>
                        <option value="custom-project" className="bg-[#0a0a0f]">
                          Custom Project
                        </option>
                        <option value="partnership" className="bg-[#0a0a0f]">
                          Partnership
                        </option>
                        <option value="other" className="bg-[#0a0a0f]">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white/60"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-indigo-500/50 focus:bg-white/10"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400">
                        Something went wrong. Please try emailing us directly at{" "}
                        <a
                          href="mailto:digitaludaan.tech@gmail.com"
                          className="underline"
                        >
                          digitaludaan.tech@gmail.com
                        </a>
                        .
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
