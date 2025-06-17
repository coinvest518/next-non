'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, MessageSquare, GraduationCap, Heart, Baby } from "lucide-react";

const programs = [
  {
    title: "FOREX Education Program",
    description: "Comprehensive financial literacy and foreign exchange trading education designed to build generational wealth through informed investment strategies.",
    icon: TrendingUp,
    duration: "12 weeks",
    participants: "25 per cohort",
    color: "bg-fortis-orange"
  },
  {
    title: "Doula Training Certification",
    description: "Professional doula training program providing comprehensive birth support education and certification for aspiring birth professionals.",
    icon: Heart,
    duration: "16 weeks",
    participants: "15 per cohort",
    color: "bg-fortis-gold"
  },
  {
    title: "Communication Skills Workshop",
    description: "Essential communication techniques for personal and professional success, focusing on conflict resolution and relationship building.",
    icon: MessageSquare,
    duration: "8 weeks",
    participants: "30 per session",
    color: "bg-fortis-brown"
  },
  {
    title: "Life Skills Development",
    description: "Practical life skills training covering financial planning, time management, goal setting, and personal development strategies.",
    icon: GraduationCap,
    duration: "10 weeks",
    participants: "20 per cohort",
    color: "bg-fortis-peru"
  },
  {
    title: "Family Engagement Program",
    description: "Strengthening family bonds through structured activities, communication workshops, and conflict resolution training.",
    icon: Users,
    duration: "6 weeks",
    participants: "12 families",
    color: "bg-fortis-orange"
  },
  {
    title: "BEBÉ GABA Partnership",
    description: "Collaborative program with BEBÉ GABA providing specialized support for new parents and early childhood development.",
    icon: Baby,
    duration: "Ongoing",
    participants: "Open enrollment",
    color: "bg-fortis-gold"
  }
];

export default function ProgramsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fortis-brown mb-6">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to strengthen families, build skills, and create pathways to prosperity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-fortis-brown">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium text-fortis-brown">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Participants:</span>
                      <span className="font-medium text-fortis-brown">{program.participants}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-fortis-orange text-white hover:bg-fortis-orange/90"
                    onClick={() => scrollToSection('contact')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-fortis-brown mb-6">Program Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">Expert Instruction</h4>
                <p className="text-gray-600">
                  Learn from experienced professionals with real-world expertise in their fields.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">Practical Application</h4>
                <p className="text-gray-600">
                  Hands-on learning with immediate application to real-life situations.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">Ongoing Support</h4>
                <p className="text-gray-600">
                  Continued guidance and community support beyond program completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}