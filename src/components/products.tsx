"use client";

import { useEffect, useRef } from "react";

const products = [
  {
    title: "PrabandhOS",
    tagline: "School Management Ecosystem",
    description:
      "A complete SaaS platform for managing schools — admissions, attendance, exams, fees, timetable, report cards, and more. Built for multi-tenant institutions.",
    features: [
      "Student Lifecycle Management",
      "Fee & Accounting",
      "Exam & Report Cards",
      "Multi-tenant Architecture",
    ],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    icon: (
      <svg className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    tagline: "iOS & Android Apps",
    description:
      "Cross-platform mobile applications built with React Native. From parent-teacher communication to field workforce management — we build apps that users love.",
    features: [
      "Cross-platform (iOS & Android)",
      "Real-time Updates",
      "Push Notifications",
      "Offline Support",
    ],
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    icon: (
      <svg className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Dairy Management",
    tagline: "Coming Soon",
    description:
      "A modern dairy management solution to streamline milk collection, quality testing, inventory, payments, and farmer relationships — built for the Indian dairy ecosystem.",
    features: [
      "Milk Collection & Tracking",
      "Quality Testing Integration",
      "Farmer Payout Management",
      "Inventory & Supply Chain",
    ],
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    icon: (
      <svg className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
];

export default function Products() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="mt-4 text-white/50">
            Purpose-built solutions for real-world problems
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={product.title}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
                  {product.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-indigo-300/70">
                  {product.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/40"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
