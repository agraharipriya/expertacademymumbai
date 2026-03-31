import { BRAND } from "../../constants/brand";

function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Home Tuition",
      color: "#dbeafe",
      accent: "#2563eb",
      points: [
        "Specialised tutors for Physics, Chemistry & Biology",
        "Concept-building for JEE Mains, JEE Advanced & NEET",
        "NCERT + HC Verma, OP Tandon, RD Sharma",
        "Problem-solving practice & chapter-wise tests",
        "Daily doubt clearing & weekly revision",
      ],
    },
    {
      icon: "💻",
      title: "Online Classes",
      color: "#dcfce7",
      accent: "#16a34a",
      points: [
        "Live online classes for Physics, Chemistry & Biology",
        "JEE & NEET level numerical sessions",
        "Recorded class support + study material",
        "Topic-wise quizzes & mock exams",
        "Regular parent–teacher progress updates",
      ],
    },
    {
      icon: "📘",
      title: "Exam Preparation",
      color: "#fef9c3",
      accent: "#ca8a04",
      points: [
        "NCERT line-by-line explanation",
        "PYQ with detailed solutions",
        "JEE/NEET pattern-based practice sets",
        "Time management & exam strategy training",
        "Full-length mock exams",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>What We Offer</span>
          <h2 className="text-4xl font-black mt-2" style={{ color: BRAND.primary }}>Our Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="p-6" style={{ background: s.color }}>
                <div className="text-5xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-black" style={{ color: s.accent }}>{s.title}</h3>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-gray-600">
                      <span style={{ color: s.accent }}>✓</span> {p}
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

export default Services;