'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useClientForm, useClientToast } from "@/components/ClientWrapper";
import { Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  const { toast } = useClientToast();
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useClientForm({
    email: "",
    firstName: ""
  });

  const onSubmit = (e: React.FormEvent) => {
    if (!formData.email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    handleSubmit(e, () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter. Stay tuned for updates!",
      });
    });
  };

  return (
    <section className="py-20 bg-fortis-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-fortis-orange rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-fortis-brown mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new programs, success stories, 
            and ways to get involved with Fortis Proles Inc.
          </p>

          <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Label htmlFor="firstName" className="sr-only">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First Name (Optional)"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="email" className="sr-only">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="h-12 px-8 bg-fortis-orange text-white hover:bg-fortis-orange/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="text-sm text-gray-600">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}