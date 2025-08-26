import { Button } from "@/components/ui/button";
import { Palette, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-background">Chitrankan</h3>
                <p className="text-sm text-background/70">Fine Art School</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Nurturing artistic talent for over 15 years. Join our community of 
              artists and discover your creative potential through expert guidance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-background mb-6">Quick Links</h4>
            <nav className="space-y-4">
              <a href="#home" className="block text-background/80 hover:text-primary transition-colors">
                Home
              </a>
              <a href="#gallery" className="block text-background/80 hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#services" className="block text-background/80 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#updates" className="block text-background/80 hover:text-primary transition-colors">
                Updates
              </a>
              <a href="#contact" className="block text-background/80 hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-background mb-6">Our Services</h4>
            <nav className="space-y-4">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Group Classes
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Private Lessons
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Workshops
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Art Commissions
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Portfolio Review
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                Art Supplies
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-background mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">
                    123 Art Street, Creative District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919876543210" className="text-background/80 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@chitrankan.art" className="text-background/80 hover:text-primary transition-colors">
                  info@chitrankan.art
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-bold text-background mb-3">Newsletter</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-md bg-background/10 text-background placeholder:text-background/50 border border-background/20 focus:outline-none focus:border-primary text-sm"
                />
                <Button variant="artistic" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Chitrankan Fine Art School. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;