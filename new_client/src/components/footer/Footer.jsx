import { BRAND } from "../../constants/brand";

function Footer() {
  return (
    <footer className="py-10 px-6 text-center text-sm text-white/60" style={{ background: BRAND.dark }}>
      <p className="font-bold text-white mb-1">Expert Academy Mumbai</p>
      <p>📞 9839188179 &nbsp;|&nbsp; 📍 Mumbai – 400037</p>
      <p className="mt-3">© {new Date().getFullYear()} Expert Academy Mumbai — All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
