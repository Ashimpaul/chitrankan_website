import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Image, Award, Users } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const Updates = () => {
  const updates = [
    {
      id: 1,
      type: "artwork",
      title: "New Landscape Series Completed",
      content: "Just finished a beautiful series of landscape paintings capturing the monsoon season. These pieces showcase advanced techniques in atmospheric perspective and color harmony.",
      image: artwork1,
      date: "2024-01-15",
      author: "Master Artist",
      icon: Image,
    },
    {
      id: 2,
      type: "achievement",
      title: "Student Exhibition Success",
      content: "Proud to announce that our students won 5 awards at the Regional Art Competition! Their dedication and our teaching methodology continue to produce exceptional results.",
      image: artwork2,
      date: "2024-01-10",
      author: "Chitrankan School",
      icon: Award,
    },
    {
      id: 3,
      type: "class",
      title: "New Watercolor Workshop Series",
      content: "Starting February, we're launching an intensive watercolor workshop series. Perfect for intermediate students looking to master this challenging medium.",
      image: artwork3,
      date: "2024-01-08",
      author: "Academy News",
      icon: Users,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="updates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our daily progress, new artworks, student achievements, 
            and upcoming events at Chitrankan Fine Art School.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {updates.map((update) => (
            <Card 
              key={update.id}
              className="overflow-hidden hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-primary/90 rounded-full">
                    <update.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              <CardContent className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{update.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(update.date)}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {update.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {update.content}
                </p>

                {/* Read More */}
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/button">
                  Read Full Update
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Never Miss an Update
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive daily updates about new artworks, 
            student achievements, and special events directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="artistic" size="lg">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Archive */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg">
            View All Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Updates;