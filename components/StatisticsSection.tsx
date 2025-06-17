import { Users, TrendingUp, Heart, Award } from "lucide-react";

export default function StatisticsSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Families Served",
      description: "Comprehensive support provided to families across our programs"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Program completion and goal achievement rate"
    },
    {
      icon: Heart,
      number: "1,200+",
      label: "Lives Impacted",
      description: "Direct positive impact on individuals and families"
    },
    {
      icon: Award,
      number: "15",
      label: "Community Partners",
      description: "Local organizations collaborating for stronger communities"
    }
  ];

  return (
    <section className="py-20 bg-fortis-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-xl text-fortis-cream max-w-3xl mx-auto">
            Measuring success through real outcomes and lasting positive change in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-fortis-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-fortis-gold mb-2">{stat.number}</h3>
                <h4 className="text-xl font-semibold mb-3">{stat.label}</h4>
                <p className="text-fortis-cream text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-fortis-orange/10 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Making a Difference</h3>
            <p className="text-lg text-fortis-cream mb-8 max-w-4xl mx-auto">
              Every program, every workshop, and every interaction is designed to create lasting positive change. 
              Our comprehensive approach addresses immediate needs while building long-term capacity for success.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Evidence-Based</h4>
                <p className="text-fortis-cream text-sm">
                  Programs built on proven methodologies and best practices in community development.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Community-Centered</h4>
                <p className="text-fortis-cream text-sm">
                  Solutions developed with and for the communities we serve, ensuring cultural relevance.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Sustainable Impact</h4>
                <p className="text-fortis-cream text-sm">
                  Focus on building skills and systems that create lasting change beyond program completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}