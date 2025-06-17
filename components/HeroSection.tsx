'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-size background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/educational-non-profit-organization-helping-students.jpg"
          alt="Happy children" 
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-fortis-orange text-white font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              FORTIS PROLES
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Lend Your Heart To Change A <span className="text-fortis-orange">Child's Story</span>
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              Fortis Proles Inc. empowers families and individuals through comprehensive education, 
              life skills training, and community support programs designed to create lasting positive change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-fortis-orange text-white hover:bg-fortis-orange/90 px-8 py-4 text-lg font-semibold shadow-lg"
                onClick={() => scrollToSection('programs')}
              >
                DONATE NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-fortis-brown px-8 py-4 text-lg font-semibold shadow-lg"
                onClick={() => scrollToSection('volunteer')}
              >
                LEARN MORE
              </Button>
            </div>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
              <div className="w-12 h-12 bg-fortis-orange rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-white">Families Served</p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
              <div className="w-12 h-12 bg-fortis-gold rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">15</h3>
              <p className="text-white">Years Experience</p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40 col-span-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Our Impact</h3>
                <p className="text-white">
                  Creating pathways to prosperity through education, empowerment, and community engagement.
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