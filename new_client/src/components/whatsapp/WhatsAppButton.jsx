function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919839188179"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-2xl transition-transform hover:scale-110"
      style={{ background: "#25D366" }}
      title="Chat on WhatsApp"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;
