import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Video, Calendar } from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      primary: "+91 98765 43210",
      secondary: "+91 87654 32109",
      action: "Call Now",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information",
      primary: "info@chitrankan.art",
      secondary: "admissions@chitrankan.art",
      action: "Send Email",
      color: "text-secondary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses via WhatsApp",
      primary: "+91 98765 43210",
      secondary: "Available 9 AM - 8 PM",
      action: "Chat Now",
      color: "text-accent"
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Virtual studio tour available",
      primary: "Schedule a call",
      secondary: "See our facilities online",
      action: "Book Call",
      color: "text-primary"
    }
  ];

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We welcome students from age 8 to seniors. Our programs are designed for all skill levels and age groups."
    },
    {
      question: "Do I need to bring my own art supplies?",
      answer: "Basic supplies are provided for classes. We also have a well-stocked art store with student-friendly prices."
    },
    {
      question: "Can I schedule a trial class?",
      answer: "Yes! We offer a free trial class for new students to experience our teaching methodology."
    },
    {
      question: "Do you offer online classes?",
      answer: "We provide both in-person and online classes. Online sessions include live demonstrations and personalized feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to begin your artistic journey? We're here to help you every step of the way. 
                Contact us to learn more about our programs or schedule a visit to our studio.
              </p>
            </div>

            {/* Quick Contact Methods */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center p-6 shadow-elegant hover:shadow-artistic transition-all duration-500 transform hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <div className={`p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors ${method.color}`}>
                      <method.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="font-medium text-foreground mb-1">{method.primary}</p>
                    <p className="text-sm text-muted-foreground mb-4">{method.secondary}</p>
                    <Button variant="modern" size="sm" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Content */}
        <Contact />

        {/* Studio Hours & Location */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Location */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">Visit Our Studio</h2>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Main Studio</h3>
                      <p className="text-muted-foreground">
                        123 Art Street, Creative District<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Landmark</h3>
                      <p className="text-muted-foreground">
                        Near Central Park, opposite City Art Gallery<br />
                        2 minutes walk from Dadar Station
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-hero p-6 rounded-xl">
                    <h4 className="font-bold text-foreground mb-3">Parking & Accessibility</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Free parking available</li>
                      <li>• Wheelchair accessible entrance</li>
                      <li>• Public transport friendly location</li>
                      <li>• Elevator access to all floors</li>
                    </ul>
                  </div>

                  <Button variant="artistic" className="w-full mt-6 group">
                    <MapPin className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">Studio Hours</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-hero rounded-lg">
                      <span className="font-medium text-foreground">Monday - Friday</span>
                      <span className="text-primary font-bold">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-hero rounded-lg">
                      <span className="font-medium text-foreground">Saturday</span>
                      <span className="text-primary font-bold">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-hero rounded-lg">
                      <span className="font-medium text-foreground">Sunday</span>
                      <span className="text-primary font-bold">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-accent" />
                      Special Hours
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Extended hours during workshop weeks and exhibition periods. 
                      Call ahead for holiday schedules.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Private sessions available outside regular hours by appointment.
                    </p>
                  </div>

                  <Button variant="modern" className="w-full mt-6">
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our programs and facilities.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-artistic transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have more questions? We're here to help!
              </p>
              <Button variant="artistic" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;