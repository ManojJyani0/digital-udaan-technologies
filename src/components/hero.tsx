export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="animate-fade-in-up">
        <span className="inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
          Building the future, one product at a time
        </span>
      </div>

      <h1 className="mt-8 animate-fade-in-up-1 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Innovative Software
        <br />
        <span className="text-gradient">Solutions</span> for
        <br />
        Modern Businesses
      </h1>

      <p className="mt-6 animate-fade-in-up-2 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
        From school management with <span className="text-white/80">PrabandhOS</span> to custom{" "}
        <span className="text-white/80">mobile apps</span> and{" "}
        <span className="text-white/80">enterprise software</span> —
        we craft products that make a real impact.
      </p>

      <div className="mt-10 animate-fade-in-up-3 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#products"
          className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Explore Products
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          Contact Us
        </a>
      </div>

      <div className="mt-16 animate-fade-in-up-4 flex items-center gap-8 text-white/30">
        <span className="text-xs uppercase tracking-widest">Trusted by</span>
        <div className="flex items-center gap-6">
          {["Schools", "Enterprises", "Startups"].map((item) => (
            <span
              key={item}
              className="text-sm font-medium text-white/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
