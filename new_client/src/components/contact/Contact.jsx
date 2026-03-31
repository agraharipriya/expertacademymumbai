import { BRAND } from "../../constants/brand";

function Contact() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScAYrCT0YmliJdHgSDyu0zZ4YUcH3PfNv3QzFMIB6IKVwOqBg/viewform?usp=sf_link";

  return (
    <section id="contact" className="py-20 px-4" style={{ background: BRAND.dark }}>
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Info & Map Row */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.accent }}>Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-2 leading-tight">Expert Academy Mumbai</h2>
              <p className="mt-4 text-white/60 text-lg">Contact us for Home Tuition and Online Classes. Join the elite group of students today!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-2xl" style={{ color: BRAND.accent }}>📞</div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Call Us</p>
                  <p className="text-white font-medium text-sm md:text-base">9839188179</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden">
                <div className="text-2xl flex-shrink-0" style={{ color: BRAND.accent }}>✉️</div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/30 uppercase font-bold">Email</p>
                  <p className="text-white font-medium text-sm md:text-base break-words">expertacademymumbai@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors col-span-1 sm:col-span-2 shadow-xl">
                <div className="text-3xl" style={{ color: BRAND.accent }}>📍</div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Location</p>
                  <p className="text-white font-medium text-base md:text-lg leading-relaxed">Mumbai – 400037, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fully Responsive Map Row */}
          <div className="w-full lg:w-1/2 h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl transition-all duration-500 hover:border-accent/20">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120687.279768652!2d72.77529881186718!3d19.042732959885822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce99863a292d%3A0x3344d1893c5d292!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714467140833!5m2!1sen!2sin"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy"
               title="Expert Academy Location"
            ></iframe>
          </div>
        </div>

        {/* High-Impact CTA for Google Form */}
        <div className="w-full py-16 px-8 rounded-[3rem] text-center border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-md">
           <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Start Your Journey Today</h3>
           <p className="text-white/60 mb-10 max-w-2xl mx-auto">Click the button below to fill out our registration form in a new tab. Our experts will get in touch with you shortly.</p>
           
           <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-black text-white transition-all hover:scale-105 active:scale-95 shadow-2xl"
              style={{ background: BRAND.accent, boxShadow: `0 0 40px ${BRAND.accent}44` }}
           >
              📝 Open Registration Form
           </a>
           <p className="mt-6 text-xs text-white/30 italic">Opens in a new browser tab for your convenience.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;