'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const upcomingEvents = [
  {
    title: "Financial Literacy Workshop",
    date: "March 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Albany Community Center",
    description: "Learn essential financial planning skills, budgeting techniques, and investment basics.",
    attendees: "25 spots available",
    category: "Education"
  },
  {
    title: "Doula Training Information Session",
    date: "March 22, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Fortis Proles Center",
    description: "Discover our comprehensive doula certification program and career opportunities.",
    attendees: "15 spots available",
    category: "Training"
  },
  {
    title: "Family Communication Workshop",
    date: "April 5, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Online via Zoom",
    description: "Strengthen family relationships through effective communication strategies.",
    attendees: "30 spots available",
    category: "Family"
  }
];

export default function EventsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fortis-brown mb-6">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, training sessions, and community events designed to strengthen families and build skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-fortis-orange/10 text-fortis-orange text-sm font-medium rounded-full">
                    {event.category}
                  </span>
                  <Calendar className="w-5 h-5 text-fortis-brown" />
                </div>
                <CardTitle className="text-xl text-fortis-brown">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-fortis-orange" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-fortis-orange" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-fortis-orange" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-3 text-fortis-orange" />
                    {event.attendees}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-fortis-orange text-white hover:bg-fortis-orange/90"
                  onClick={scrollToContact}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-fortis-brown mb-6">Can't Make These Events?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We offer flexible scheduling and multiple sessions throughout the year. 
              Contact us to learn about upcoming dates or to request a private session for your group.
            </p>
            <Button 
              size="lg"
              className="bg-fortis-brown text-white hover:bg-fortis-brown/90"
              onClick={scrollToContact}
            >
              Contact Us for More Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}