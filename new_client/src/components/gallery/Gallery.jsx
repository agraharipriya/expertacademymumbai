import { BRAND } from "../../constants/brand";

function Gallery() {
  const images = [
    "https://expertacademymumbai.com/gallery1.png",
    "https://expertacademymumbai.com/gallery2.png",
    "https://expertacademymumbai.com/gallery3.png",
    "https://expertacademymumbai.com/gallery4.png",

  ];
  
  const labels = ["Physics Lab", "Online Session", "Mock Test", "Study Group", "Chemistry Class", "Biology Diagrams"];

  return (
    <section id="gallery" className="py-20 px-6" style={{ background: BRAND.light }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>Gallery</span>
          <h2 className="text-4xl font-black mt-2" style={{ color: BRAND.primary }}>Our Learning Environment</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {images.slice(0, 4).map((url, i) => (
            <div
              key={i}
              className="rounded-2xl h-64 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <img 
                src={url} 
                alt={labels[i]} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">📷 ${labels[i]}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
