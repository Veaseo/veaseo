"use client";

import { Phone } from "lucide-react";
import { business, telLink } from "@/lib/business";

/**
 * Sticky call-to-action button visible on mobile only.
 * Allows visitors to call Veaseo in one tap from any page.
 */
export default function StickyCallButton() {
  return (
    <a
      href={telLink}
      aria-label={`Appeler Veaseo au ${business.phone}`}
      className="lg:hidden fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3.5 rounded-full shadow-lg shadow-orange-500/30 transition-all active:scale-95"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
      </span>
      <Phone className="w-4 h-4" strokeWidth={2.5} />
      <span className="text-sm">Appeler</span>
    </a>
  );
}
