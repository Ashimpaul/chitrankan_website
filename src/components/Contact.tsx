import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to begin your artistic journey? Contact us to learn more about 
            our programs, schedule a visit, or commission a custom artwork.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Visit Our Studio
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Art Street, Creative District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      +91 87654 32109
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@chitrankan.art<br />
                      admissions@chitrankan.art
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Studio Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="elegant" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="elegant" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="elegant" size="icon">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        placeholder="Enter your phone number"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Interest Area
                      </label>
                      <select className="w-full h-12 px-3 border border-input rounded-md bg-background text-foreground">
                        <option value="">Select your interest</option>
                        <option value="group-classes">Group Classes</option>
                        <option value="private-lessons">Private Lessons</option>
                        <option value="workshops">Workshops</option>
                        <option value="commissions">Art Commissions</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input 
                      placeholder="Enter message subject"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your artistic goals and how we can help you..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="artistic" size="lg" className="flex-1 group">
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                    <Button variant="elegant" size="lg">
                      Schedule Visit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Call Now</h4>
              <p className="text-sm text-muted-foreground mb-4">Speak directly with our team</p>
              <Button variant="elegant" size="sm" className="w-full">
                +91 98765 43210
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Email Us</h4>
              <p className="text-sm text-muted-foreground mb-4">Get detailed information</p>
              <Button variant="elegant" size="sm" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Visit Studio</h4>
              <p className="text-sm text-muted-foreground mb-4">See our facilities in person</p>
              <Button variant="elegant" size="sm" className="w-full">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Book Consultation</h4>
              <p className="text-sm text-muted-foreground mb-4">Free 30-minute session</p>
              <Button variant="artistic" size="sm" className="w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;