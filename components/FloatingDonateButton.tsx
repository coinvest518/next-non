'use client'

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function FloatingDonateButton() {
  const handleDonateClick = () => {
    // PayPal donation link - replace with actual PayPal donation URL
    window.open('https://www.paypal.com/donate/', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleDonateClick}
        className="bg-fortis-orange hover:bg-fortis-orange/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 h-auto"
        size="lg"
      >
        <Heart className="w-5 h-5 mr-2" />
        Donate Now
      </Button>
    </div>
  );
}