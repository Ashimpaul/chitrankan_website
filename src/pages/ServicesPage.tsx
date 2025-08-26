import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Users, BookOpen, Trophy, Camera } from "lucide-react";

const ServicesPage = () => {
  const schedules = [
    {
      day: "Monday",
      sessions: [
        { time: "10:00 - 12:00", class: "Beginner Oil Painting", instructor: "Priya Sharma" },
        { time: "14:00 - 16:00", class: "Intermediate Watercolor", instructor: "Rajesh Kumar" },
        { time: "18:00 - 20:00", class: "Evening Sketching", instructor: "Meera Patel" }
      ]
    },
    {
      day: "Tuesday", 
      sessions: [
        { time: "09:00 - 11:00", class: "Advanced Portraiture", instructor: "Priya Sharma" },
        { time: "15:00 - 17:00", class: "Abstract Techniques", instructor: "Rajesh Kumar" },
        { time: "19:00 - 21:00", class: "Digital Art Basics", instructor: "Meera Patel" }
      ]
    },
    {
      day: "Wednesday",
      sessions: [
        { time: "10:00 - 12:00", class: "Landscape Painting", instructor: "Priya Sharma" },
        { time: "14:00 - 16:00", class: "Color Theory Workshop", instructor: "Rajesh Kumar" },
        { time: "18:00 - 20:00", class: "Mixed Media Art", instructor: "Meera Patel" }
      ]
    }
  ];

  const facilities = [
    {
      icon: BookOpen,
      title: "Art Library",
      description: "Extensive collection of art books, magazines, and digital resources"
    },
    {
      icon: Trophy,
      title: "Exhibition Space",
      description: "Dedicated gallery space for student exhibitions and showcases"
    },
    {
      icon: Camera,
      title: "Documentation Studio",
      description: "Professional photography setup for artwork documentation"
    },
    {
      icon: Users,
      title: "Community Space",
      description: "Comfortable areas for collaboration and creative discussions"
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
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive art education programs designed to nurture your creativity 
                and develop your technical skills, from beginner to professional level.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Content */}
        <Services />

        {/* Class Schedule */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Weekly Schedule</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our classes run throughout the week with flexible timing options to accommodate your schedule.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {schedules.map((schedule, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-artistic transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">{schedule.day}</h3>
                    </div>
                    <div className="space-y-4">
                      {schedule.sessions.map((session, sessionIndex) => (
                        <div key={sessionIndex} className="p-4 bg-gradient-hero rounded-xl border border-border/50">
                          <div className="flex items-center mb-2">
                            <Clock className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium text-primary">{session.time}</span>
                          </div>
                          <h4 className="font-bold text-foreground mb-1">{session.class}</h4>
                          <p className="text-sm text-muted-foreground">with {session.instructor}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Facilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art facilities designed to provide the best learning environment for artistic development.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="text-center p-6 shadow-elegant hover:shadow-artistic transition-all duration-500 transform hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:animate-float">
                      <facility.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">How to Enroll</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple steps to begin your artistic journey with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground group-hover:animate-bounce">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  Reach out via phone, email, or visit our studio to discuss your artistic goals.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-secondary-foreground group-hover:animate-bounce">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Assessment</h3>
                <p className="text-muted-foreground">
                  We'll evaluate your current skill level and recommend the best program for you.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground group-hover:animate-bounce">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Start Creating</h3>
                <p className="text-muted-foreground">
                  Begin your classes and start developing your artistic skills with expert guidance.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="artistic" size="lg" className="animate-glow">
                Begin Enrollment Process
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;