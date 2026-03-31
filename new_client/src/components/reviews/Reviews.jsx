import { BRAND } from "../../constants/brand";

function Reviews() {
  const reviews = [
    { name: "Sonam Yadav", text: "The home tuition helped me improve my Maths and Science. Excellent teachers!" },
    { name: "Deepak Prajapati", text: "Excellent academic support. The tutors are knowledgeable and focus on concept clarity along with exam prep. Individual attention makes a big difference." },
    { name: "Ankur Mishra", text: "Online classes are very interactive. Study material and tests are very helpful." },
    { name: "Shweta Pandey", text: "Best academy for personal attention. My confidence increased a lot." },
    { name: "Neeraj Yadav", text: "One of the most reliable home tuition services. Well-trained tutors, flexible timings. Highly recommended for all classes." },
  ];

  return (
    <section id="reviews" className="py-20 px-6" style={{ background: BRAND.light }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>Testimonials</span>
          <h2 className="text-4xl font-black mt-2" style={{ color: BRAND.primary }}>Student Reviews</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="text-yellow-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: BRAND.primary }}
                >
                  {r.name.charAt(0)}
                </div>
                <p className="font-bold text-sm" style={{ color: BRAND.primary }}>{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
