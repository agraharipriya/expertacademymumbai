import { useState } from "react";
import { BRAND } from "../../constants/brand";

function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "How do the classes work?", a: "Classes are fully personalised—either at home or online—with structured weekly planning and tests." },
    { q: "Do you provide study material?", a: "Yes, students get Science notes, PYQ solutions, formula sheets, and practice worksheets." },
    { q: "How many hours per week?", a: "Depends on the plan chosen—typically 3 to 6 hours per week." },
    { q: "Are tutors experienced?", a: "All tutors are qualified and experienced in teaching JEE/NEET and Board-level Science." },
    { q: "Do you offer demo classes?", a: "Yes! A free demo class is provided before starting." },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>FAQ</span>
          <h2 className="text-4xl font-black mt-2" style={{ color: BRAND.primary }}>Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-xl overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
              <button
                className="w-full text-left px-5 py-4 font-semibold flex justify-between items-center text-sm"
                style={{ color: BRAND.primary }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span>{open === i ? "▲" : "▼"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 bg-gray-50">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
