import { useState } from "react";
import { BRAND } from "../../constants/brand";

function Syllabus() {
  const [active, setActive] = useState("📘 Physics");
  const subjects = {
    "📘 Physics": ["Units & Measurements", "Kinematics & Laws of Motion", "Work, Energy & Power","Rotational Motion", "Gravitation","Mechanical Properties of matter","Thermal Properties of matter", "Thermodynamics","Kinetic Theory of Gases", "Oscillations & Wave","Electromagnetism", "Optics", "Modern Physics", "Semi-conductor",],
    "🧪 Chemistry": ["Basic Concepts of Chemistry", "Atomic Structure & Chemical Bonding", "Periodic Table & Properties", "Organic Chemistry Fundamentals", "Hydrocarbons & Functional Groups", "Thermodynamics & Equilibrium", "Coordination Compounds", "Biomolecules"],
    "🧮 Mathematics": ["Number System", "Quadratic Equations", "Arithmetic & Geometric Progressions", "Coordinate Geometry", "Trigonometry", "Limits & Differentiation", "Integration & Calculus", "Vectors & 3D Geometry", "Matrices & Determinants"],
    "🧬 Biology": ["Cell Structure & Functions", "Human Physiology", "Plant Physiology", "Genetics & Evolution", "Biotechnology", "Reproduction", "Biology in Human Welfare", "Ecology & Environment"],
  };

  return (
    <section id="syllabus" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>Curriculum</span>
          <h2 className="text-4xl font-black mt-2" style={{ color: BRAND.primary }}>JEE & NEET Syllabus</h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.keys(subjects).map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className="px-5 py-2 rounded-full text-sm font-bold transition-all"
              style={
                active === s
                  ? { background: BRAND.primary, color: "white" }
                  : { background: BRAND.light, color: BRAND.primary }
              }
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {subjects[active].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700"
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND.accent }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
