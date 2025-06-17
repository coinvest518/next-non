import { Shield, Users, Target, Heart } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fortis-brown mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fortis Proles Inc. is dedicated to strengthening families and communities through 
            comprehensive education, skill development, and sustainable support systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-fortis-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-fortis-brown mb-4">Strengthen</h3>
            <p className="text-gray-600">
              Building resilient families through comprehensive support and education programs.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-fortis-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-fortis-brown mb-4">Empower</h3>
            <p className="text-gray-600">
              Providing tools and knowledge to help individuals achieve their full potential.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-fortis-peru rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-fortis-brown mb-4">Transform</h3>
            <p className="text-gray-600">
              Creating lasting positive change in communities through targeted interventions.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-fortis-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-fortis-brown mb-4">Care</h3>
            <p className="text-gray-600">
              Approaching every interaction with compassion, respect, and genuine concern.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-fortis-cream rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-fortis-brown mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 mb-6">
              To create a world where every family has access to the resources, education, and support 
              needed to thrive and build generational wealth.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">Education First</h4>
                <p className="text-gray-600">
                  Prioritizing financial literacy, life skills, and professional development.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">Community Focused</h4>
                <p className="text-gray-600">
                  Building strong networks of support within local communities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">Future Minded</h4>
                <p className="text-gray-600">
                  Creating sustainable solutions for long-term success and prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}