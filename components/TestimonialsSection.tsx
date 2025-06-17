import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "FOREX Program Graduate",
    content: "The financial literacy program completely changed my family's future. I learned investment strategies that are already showing returns and building our generational wealth.",
    rating: 5,
    program: "FOREX Education"
  },
  {
    name: "Jennifer Thompson",
    role: "Certified Doula",
    content: "The doula training at Fortis Proles was comprehensive and supportive. I now have a fulfilling career helping families during their most important moments.",
    rating: 5,
    program: "Doula Training"
  },
  {
    name: "David Johnson",
    role: "Program Participant",
    content: "The communication skills workshop strengthened my relationship with my teenage daughter. We now have open, honest conversations that bring us closer together.",
    rating: 5,
    program: "Communication Skills"
  },
  {
    name: "Ashley Williams",
    role: "Family Program Graduate",
    content: "Fortis Proles helped our entire family develop better financial habits and communication skills. The support has been life-changing for all of us.",
    rating: 5,
    program: "Family Engagement"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fortis-brown mb-6">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from families and individuals whose lives have been transformed through our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-fortis-orange/20" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-fortis-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-fortis-brown">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-fortis-orange/10 text-fortis-orange text-sm font-medium rounded-full">
                        {testimonial.program}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-fortis-cream rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-fortis-brown mb-6">Join Our Success Stories</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Every testimonial represents a family strengthened, a skill gained, and a future brightened. 
              Your transformation story could be next.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-fortis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-2">Apply</h4>
                <p className="text-gray-600">Submit your application for the program that interests you most.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-fortis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-2">Learn</h4>
                <p className="text-gray-600">Participate in comprehensive training with expert instructors.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-fortis-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-2">Thrive</h4>
                <p className="text-gray-600">Apply your new skills and transform your family's future.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}