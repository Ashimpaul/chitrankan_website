import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instruction",
      description: "Learn from experienced artists with years of teaching and professional practice.",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with intimate class sizes for optimal learning experience.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our students regularly win competitions and exhibitions nationwide.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Structured curriculum designed to help you achieve your artistic objectives.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Chitrankan Fine Art School
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded with a passion for nurturing artistic talent, Chitrankan Fine Art School 
                  has been a beacon of creativity and excellence for over 15 years. Our mission is 
                  to provide comprehensive art education that combines traditional techniques with 
                  contemporary approaches.
                </p>
                <p>
                  We believe that every individual has the potential to create beautiful art. 
                  Our experienced instructors work closely with students to develop their unique 
                  artistic voice while building strong foundational skills in drawing, painting, 
                  and composition.
                </p>
                <p>
                  Whether you're a complete beginner or looking to refine your existing skills, 
                  our diverse range of courses and personalized instruction will help you achieve 
                  your artistic goals.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="artistic" size="lg">
                Learn More About Us
              </Button>
              <Button variant="elegant" size="lg">
                Meet Our Instructors
              </Button>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-elegant hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Students Taught</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">15+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">100+</p>
              <p className="text-muted-foreground">Artworks Sold</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">25+</p>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;