import { BRAND } from "../../constants/brand";

function WhyUs() {
  const steps = [
    { n: "01", title: "Concept Building", desc: "Clear explanation of every topic from basics to advanced level." },
    { n: "02", title: "Practice", desc: "Daily numerical & problem-solving sessions with reference books." },
    { n: "03", title: "Testing", desc: "Topic-wise tests + full-length mock exams in JEE/NEET pattern." },
    { n: "04", title: "Revision", desc: "Regular revision cycles, doubt clearing and parent updates." },
  ];
  const perks = [
    "👨🎓 One-to-One Attention",
    "🎓 Expert Qualified Tutors",
    "❓ 24/7 Doubt Support",
    "✅ Free Demo Class",
    "📋 Weekly Chapter Tests",
    "📊 Progress Reports",
    "🏠 Flexible Home/Online",
    "📚 Free Study Material",
  ];

  return (
    <section id="why" className="py-20 px-6" style={{ background: BRAND.dark }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>Our Approach</span>
          <h2 className="text-4xl font-black mt-2 text-white">Why Choose Expert Academy?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Proven 4-Step Learning Strategy</h3>
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-black text-white"
                  style={{ background: BRAND.accent }}
                >
                  {s.n}
                </div>
                <div>
                  <h4 className="font-bold text-white">{s.title}</h4>
                  <p className="text-sm text-white/60 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* perks grid */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
            <div className="grid grid-cols-2 gap-3">
              {perks.map((p) => (
                <div key={p} className="bg-white/10 rounded-xl px-4 py-3 text-sm text-white/80">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;