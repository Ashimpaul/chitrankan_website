import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star, Brush, Palette } from "lucide-react";

const AboutPage = () => {
  const instructors = [
    {
      name: "Priya Sharma",
      specialty: "Oil Painting & Classical Techniques",
      experience: "20+ years",
      description: "Master artist specializing in realistic portraiture and landscape painting with traditional oil techniques.",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Rajesh Kumar", 
      specialty: "Watercolor & Modern Art",
      experience: "15+ years",
      description: "Contemporary artist known for innovative watercolor techniques and abstract expressionism.",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Meera Patel",
      specialty: "Digital Art & Mixed Media",
      experience: "12+ years", 
      description: "Pioneer in digital art education, combining traditional skills with modern technology.",
      image: "/api/placeholder/300/400"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "National Art Awards",
      count: "25+",
      description: "Our students have won prestigious national competitions"
    },
    {
      icon: Users,
      title: "Students Graduated", 
      count: "500+",
      description: "Successful artists now working professionally"
    },
    {
      icon: Star,
      title: "Exhibition Showcases",
      count: "100+",
      description: "Student artworks displayed in galleries nationwide"
    },
    {
      icon: Clock,
      title: "Years of Excellence",
      count: "15+",
      description: "Consistently delivering quality art education"
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
                About Chitrankan
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Where artistic dreams take flight through dedicated instruction, 
                creative community, and a passion for excellence in fine arts education.
              </p>
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <About />

        {/* Our Instructors */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Instructors</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn from experienced professionals who are passionate about sharing their knowledge and helping you develop your artistic voice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-artistic transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="relative h-64 bg-gradient-artistic"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{instructor.specialty}</p>
                    <p className="text-sm text-muted-foreground mb-4">{instructor.experience} experience</p>
                    <p className="text-muted-foreground leading-relaxed">{instructor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Recognition and success that speaks to our commitment to excellence in art education.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-8 shadow-elegant hover:shadow-artistic transition-all duration-500 transform hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:animate-glow">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold text-primary mb-2 group-hover:animate-glow">
                      {achievement.count}
                    </h3>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-gradient-hero rounded-3xl p-12 text-center shadow-glass">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Join Our Artistic Community?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Take the first step towards developing your artistic skills with our expert instructors and supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="artistic" size="lg" className="group">
                  <Brush className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Your Journey
                </Button>
                <Button variant="modern" size="lg" className="group">
                  <Palette className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;