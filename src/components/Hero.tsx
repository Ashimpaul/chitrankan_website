import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, Palette } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Master the Art of
                <span className="bg-gradient-artistic bg-clip-text text-transparent"> Fine Painting</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Welcome to Chitrankan Fine Art School, where creativity meets technique. 
                Join our community of artists and discover your artistic potential through 
                expert guidance and personalized instruction.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Students</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-secondary/10 rounded-full">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-accent/10 rounded-full">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">100+</p>
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
              <Button variant="elegant" size="lg">
                View Our Gallery
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={heroArt}
                alt="Beautiful fine art painting showcasing artistic mastery"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-artistic border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-full">
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