import { BRAND } from "../../constants/brand";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${BRAND.dark} 0%, ${BRAND.primary} 60%, #1e5f8a 100%)`,
      }}
    >
      {/* decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: BRAND.accent }} />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#3b82f6" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* badge */}
        <span
          className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold text-white tracking-widest uppercase"
          style={{ background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.5)" }}
        >
          🏆 Mumbai's Top Science Coaching
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          Expert Academy<br />
          <span style={{ color: BRAND.accent }}>Mumbai</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Professional Home Tuition & Online Tuition Services for JEE, NEET & Board Exams
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScAYrCT0YmliJdHgSDyu0zZ4YUcH3PfNv3QzFMIB6IKVwOqBg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-black text-white hover:scale-105 transition-all shadow-2xl"
              style={{ background: BRAND.accent }}
            >
              🚀 Book Free Demo Class
            </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full font-bold text-lg transition-colors border"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
          >
            Learn More →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "500+", label: "Students Taught" },
            { val: "8+", label: "Years Experience" },
            { val: "95%", label: "Success Rate" },
            { val: "3", label: "Expert Tutors" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black" style={{ color: BRAND.accent }}>{s.val}</p>
              <p className="text-sm text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40 text-sm">↓ scroll</div>
    </section>
  );
}

export default Hero;