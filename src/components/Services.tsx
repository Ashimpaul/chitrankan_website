import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brush, Palette, Users, User, Clock, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Group Classes",
      description: "Join our vibrant community classes for all skill levels",
      features: ["Small class sizes", "Weekly sessions", "All materials included", "Exhibition opportunities"],
      price: "₹2,500/month",
      duration: "2 hours/week",
      popular: false,
    },
    {
      icon: User,
      title: "Private Lessons",
      description: "One-on-one instruction tailored to your specific goals",
      features: ["Personalized curriculum", "Flexible scheduling", "Rapid skill development", "Portfolio preparation"],
      price: "₹1,200/session",
      duration: "1.5 hours",
      popular: true,
    },
    {
      icon: Brush,
      title: "Workshops",
      description: "Intensive weekend workshops on specialized techniques",
      features: ["Expert guest artists", "Specialized techniques", "Certificate provided", "Take-home projects"],
      price: "₹3,500/workshop",
      duration: "2 days",
      popular: false,
    },
    {
      icon: Palette,
      title: "Art Commissions",
      description: "Custom artwork created to your specifications",
      features: ["Portrait paintings", "Landscape commissions", "Abstract pieces", "Commercial artwork"],
      price: "₹5,000+",
      duration: "2-4 weeks",
      popular: false,
    },
  ];

  const additionalServices = [
    {
      icon: Star,
      title: "Art Supplies",
      description: "High-quality art materials at student-friendly prices",
    },
    {
      icon: Clock,
      title: "Portfolio Review",
      description: "Expert feedback and guidance for your artistic portfolio",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of art education services 
            designed to nurture your creativity and develop your skills.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1 ${
                service.popular ? 'ring-2 ring-primary shadow-artistic' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </div>

                <Button 
                  variant={service.popular ? "artistic" : "elegant"} 
                  className="w-full"
                >
                  {service.title === "Art Commissions" ? "Get Quote" : "Enroll Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-3xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Additional Services
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-background rounded-xl">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Artistic Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today to discuss your goals and find the perfect program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="artistic" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="elegant" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;