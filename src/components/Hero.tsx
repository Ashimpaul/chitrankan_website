import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, Palette } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-mesh overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Master the Art of
                <span className="bg-gradient-artistic bg-clip-text text-transparent animate-glow"> Fine Painting</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Welcome to Chitrankan Fine Art School, where creativity meets technique. 
                Join our community of artists and discover your artistic potential through 
                expert guidance and personalized instruction.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors group-hover:animate-bounce">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-foreground group-hover:text-primary transition-colors">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Students</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors group-hover:animate-bounce">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-foreground group-hover:text-secondary transition-colors">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors group-hover:animate-bounce">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-foreground group-hover:text-accent transition-colors">100+</p>
                  <p className="text-sm text-muted-foreground">Artworks Sold</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="artistic" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="modern" size="lg" className="group">
                <Palette className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Our Gallery
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-3xl shadow-artistic">
              <img
                src={heroArt}
                alt="Beautiful fine art painting showcasing artistic mastery"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-glass backdrop-blur-lg p-6 rounded-2xl shadow-glass border border-border/50 animate-slide-up">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-full animate-glow">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Expert Instruction</p>
                  <p className="text-sm text-muted-foreground">Personalized guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;