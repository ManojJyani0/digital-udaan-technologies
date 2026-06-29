export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gradient">D</span>
              <span className="text-white/80">igital </span>
              <span className="text-gradient">U</span>
              <span className="text-white/80">daan</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/30">
              Building innovative software solutions for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/60">Products</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-sm text-white/30 transition-colors hover:text-white/60"
                >
                  PrabandhOS
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm text-white/30 transition-colors hover:text-white/60"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm text-white/30 transition-colors hover:text-white/60"
                >
                  Dairy Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/60">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:digitaludaan.tech@gmail.com"
                  className="text-sm text-white/30 transition-colors hover:text-white/60"
                >
                  digitaludaan.tech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-sm text-white/20">
          &copy; {new Date().getFullYear()} Digital Udaan Technologies. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
