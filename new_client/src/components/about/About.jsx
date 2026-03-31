import { BRAND } from "../../constants/brand";

function About() {
  return (
    <section id="about" className="py-20 px-6" style={{ background: BRAND.light }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>About Us</span>
          <h2 className="text-4xl font-black mt-2 mb-4" style={{ color: BRAND.primary }}>
            Shaping Future Scientists & Engineers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Expert Academy Mumbai specialises in high-quality <strong>Science Coaching</strong> for students preparing for <strong>JEE, NEET</strong> and <strong>Board Exams (CBSE, ICSE, State Board)</strong>. With experienced Science tutors and personalised teaching methods, we focus on concept clarity, problem-solving skills, and exam-oriented preparation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our tutors are qualified IIT/NEET specialists who believe every student can excel with the right guidance and consistent practice.
          </p>
          <div className="flex gap-4 flex-wrap">
            {["📞 9839188179", "📧 expertacademymumbai@gmail.com", "📍 Mumbai – 400037"].map((c) => (
              <span key={c} className="text-xs px-3 py-2 rounded-lg bg-white shadow text-gray-700 font-medium">{c}</span>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "🏠", title: "Home Tuition", desc: "One-to-one personalised coaching at your doorstep" },
            { icon: "💻", title: "Online Classes", desc: "Live interactive sessions from anywhere" },
            { icon: "📘", title: "Exam Prep", desc: "JEE, NEET & Board focused strategies" },
            { icon: "📊", title: "Progress Tracking", desc: "Regular tests and parent feedback" },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="font-bold text-sm mb-1" style={{ color: BRAND.primary }}>{c.title}</h3>
              <p className="text-xs text-gray-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
