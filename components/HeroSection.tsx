'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-fortis-navy to-black text-white overflow-hidden">
      {/* Background overlay with warmth */}
      <div className="absolute inset-0 bg-gradient-to-r from-fortis-orange/20 via-transparent to-fortis-teal/20"></div>
      
      {/* Background elements to simulate depth and imagery */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fortis-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-fortis-teal/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-fortis-orange/20 text-fortis-orange font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              FORTIS PROLES
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Lend Your Heart To Change A <span className="text-fortis-orange">Child's Story</span>
            </h1>
            
            <p className="text-xl text-fortis-cream mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empowering youth from the womb through adulthood by supporting families, 
              equipping youth with life skills, and providing economic, emotional, 
              and educational tools to transform generational cycles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-fortis-orange text-white hover:bg-fortis-orange/90 px-8 py-4 text-lg font-semibold"
                onClick={() => scrollToSection('programs')}
              >
                DONATE NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-fortis-navy px-8 py-4 text-lg font-semibold"
                onClick={() => scrollToSection('volunteer')}
              >
                LEARN MORE
              </Button>
            </div>
          </div>
          
          {/* Hero Stats - adapted for dark theme */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-fortis-orange rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-fortis-cream">Families Served</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-fortis-teal rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">15</h3>
              <p className="text-fortis-cream">Years Experience</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 col-span-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Our Impact</h3>
                <p className="text-fortis-cream">
                  Transforming lives through education, empowerment, and community support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}