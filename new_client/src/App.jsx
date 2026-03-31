import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Tutors from "./components/tutors/Tutors";
import Syllabus from "./components/syllabus/Syllabus";
import WhyUs from "./components/services/WhyUs";
import Reviews from "./components/reviews/Reviews";
import FAQ from "./components/faq/FAQ";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/whatsapp/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tutors />
      <Syllabus />
      <WhyUs />
      <Reviews />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;