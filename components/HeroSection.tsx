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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-fortis-cream to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-fortis-brown to-fortis-orange transform rotate-12 scale-150"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-fortis-orange/10 text-fortis-orange font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Empowering Strong Offspring
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-fortis-brown mb-6 leading-tight">
              Building <span className="text-fortis-orange">Stronger</span> Families,
              <br className="hidden lg:block" />
              Brighter <span className="text-fortis-gold">Futures</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Fortis Proles Inc. empowers families and individuals through comprehensive education, 
              life skills training, and community support programs designed to create lasting positive change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-fortis-orange text-white hover:bg-fortis-orange/90 px-8 py-3 text-lg"
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-fortis-brown text-fortis-brown hover:bg-fortis-brown hover:text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('volunteer')}
              >
                Get Involved
              </Button>
            </div>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-fortis-cream">
              <div className="w-12 h-12 bg-fortis-orange rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-fortis-brown mb-2">500+</h3>
              <p className="text-gray-600">Families Served</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-fortis-cream">
              <div className="w-12 h-12 bg-fortis-gold rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-fortis-brown mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-fortis-cream col-span-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-fortis-brown mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Creating pathways to prosperity through education, empowerment, and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-fortis-brown rounded-full flex justify-center">
          <div className="w-1 h-3 bg-fortis-brown rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}