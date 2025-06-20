import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fortis-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-fortis-orange rounded-full flex items-center justify-center mr-3">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold">Fortis Proles Inc.</h3>
            </div>
            <p className="text-fortis-cream mb-4 max-w-md">
              Strengthening families and communities through comprehensive education, 
              skill development, and sustainable support systems.
            </p>
            <p className="text-sm text-fortis-cream" suppressHydrationWarning>
              DOS ID: <a 
                href="https://appext20.dos.ny.gov/corp_public/CORPSEARCH.ENTITY_INFORMATION?p_nameid=0&p_corpid=7433656&p_entity_name=fortis%20proles&p_name_type=%25&p_search_type=BEGINS&p_srch_results_page=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white"
                suppressHydrationWarning
              >
                7433656
              </a> | 501(c)(3) Nonprofit Organization
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-fortis-orange" />
               
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-fortis-orange" />
                <span className="text-sm">(518) 704-8543</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-fortis-orange" />
                <span className="text-sm">astrong1109@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2" suppressHydrationWarning>
              <a href="#mission" className="block text-sm text-fortis-cream hover:text-white transition-colors" suppressHydrationWarning>
                Our Mission
              </a>
              <a href="#programs" className="block text-sm text-fortis-cream hover:text-white transition-colors" suppressHydrationWarning>
                Programs
              </a>
              <a href="#volunteer" className="block text-sm text-fortis-cream hover:text-white transition-colors" suppressHydrationWarning>
                Volunteer
              </a>
              <a href="#contact" className="block text-sm text-fortis-cream hover:text-white transition-colors" suppressHydrationWarning>
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-fortis-cream/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-fortis-cream mb-4 md:mb-0">
              © {new Date().getFullYear()} Fortis Proles Inc. All rights reserved.
            </p>
            <div className="flex space-x-6" suppressHydrationWarning>
              <a href="#" className="text-sm text-fortis-cream hover:text-white transition-colors" suppressHydrationWarning>
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-fortis-cream hover:text-white transition-colors" suppressHydrationWarning>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}