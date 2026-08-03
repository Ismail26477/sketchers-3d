import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919595376600"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-glow fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-300 hover:scale-110 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7 fill-current" strokeWidth={0} />
    </a>
  );
}
