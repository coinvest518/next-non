import { Shield, Users, Target, Heart } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="relative py-20 overflow-hidden" style={{
      backgroundImage: `linear-gradient(135deg, rgba(72, 61, 139, 0.9) 0%, rgba(106, 90, 205, 0.8) 50%, rgba(64, 224, 208, 0.7) 100%), 
                       url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: 'cover, 80px 80px',
      backgroundPosition: 'center, center'
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fortis-orange/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-fortis-gold/20 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-fortis-orange/20 text-fortis-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR MISSION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Building <span className="text-fortis-orange">Stronger Communities</span>
          </h2>
          <p className="text-xl text-fortis-cream max-w-3xl mx-auto drop-shadow-md">
            Fortis Proles Inc. is dedicated to strengthening families and communities through 
            comprehensive education, skill development, and sustainable support systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-fortis-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Strengthen</h3>
            <p className="text-fortis-cream">
              Building resilient families through comprehensive support and education programs.
            </p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-fortis-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Empower</h3>
            <p className="text-fortis-cream">
              Providing tools and knowledge to help individuals achieve their full potential.
            </p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-fortis-peru rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Transform</h3>
            <p className="text-fortis-cream">
              Creating lasting positive change in communities through targeted interventions.
            </p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-fortis-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Care</h3>
            <p className="text-fortis-cream">
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