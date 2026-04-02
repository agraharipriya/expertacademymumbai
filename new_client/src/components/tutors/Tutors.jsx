import { BRAND } from "../../constants/brand";

function Tutors() {
  const tutors = [
    {
      name: "Er. Rahul Pandey Sir",
      qual: "M.Tech. (Mechanical Engineering)",
      exp: "8+ years | JEE/NEET Specialist",
      subject: "Physics",
      color: "#dbeafe",
      icon: "⚙️",
      desc: "Expert in numerical problem solving and concept clarity.",
    },
    {
      name: "Mr. Rishikesh Sir",
      qual: "M.Sc. Chemistry (IIT Bombay)",
      exp: "7+ years | Physical/Organic Expert",
      subject: "Chemistry",
      color: "#dcfce7",
      icon: "🧪",
      desc: "Focus on reactions, mechanisms & practice questions.",
    },
    {
      name: "Dr. Harish Sir",
      qual: "MBBS",
      exp: "6+ years | NEET Biology Specialist",
      subject: "Biology",
      color: "#fce7f3",
      icon: "🧬",
      desc: "NCERT-focused teaching with diagrams & memory tricks.",
    },
    {
      name: "Er. Rajneesh Kumar Jha",
      qual: "B.Tech",
      exp: "6+ years | JEE Maths Specialist",
      subject: "Maths",
      color: "#fce7f3",
      icon: "🧮",
      desc: "Expert in JEE Maths problem solving and concept clarity.",
    },
  ];

  return (
    <section id="tutors" className="py-20 px-6" style={{ background: BRAND.light }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>Meet The Team</span>
          <h2 className="text-4xl font-black mt-2" style={{ color: BRAND.primary }}>Our Expert Tutors</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tutors.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-32 flex items-center justify-center text-6xl" style={{ background: t.color }}>
                {t.icon}
              </div>
              <div className="p-6">
                <h3 className="font-black text-lg" style={{ color: BRAND.primary }}>{t.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{t.qual}</p>
                <p className="text-xs text-gray-400">{t.exp}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold" style={{ background: t.color, color: BRAND.primary }}>
                  {t.subject}
                </span>
                <p className="mt-3 text-sm text-gray-600">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tutors;
