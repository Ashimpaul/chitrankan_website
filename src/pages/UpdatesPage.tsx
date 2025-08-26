import Header from "@/components/Header";
import Updates from "@/components/Updates";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, User, Tag, Search, Plus, Bookmark } from "lucide-react";

const UpdatesPage = () => {
  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "artwork", name: "New Artwork", count: 8 },
    { id: "achievements", name: "Achievements", count: 6 },
    { id: "classes", name: "Classes & Workshops", count: 5 },
    { id: "events", name: "Events", count: 3 },
    { id: "tips", name: "Art Tips", count: 2 }
  ];

  const recentPosts = [
    {
      title: "Watercolor Mastery Workshop",
      excerpt: "Join us for an intensive weekend workshop...",
      date: "2024-01-20",
      category: "classes"
    },
    {
      title: "Student Artwork Featured in Gallery",
      excerpt: "Proud to showcase our talented students...",
      date: "2024-01-18",
      category: "achievements"
    },
    {
      title: "New Oil Painting Techniques",
      excerpt: "Discover advanced techniques for oil painting...",
      date: "2024-01-15",
      category: "tips"
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
                Latest Updates
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay up-to-date with the latest news, artwork, achievements, and events 
                from Chitrankan Fine Art School. Follow our journey of artistic excellence.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search updates, artwork, or topics..."
                  className="pl-12 h-14 text-lg backdrop-blur-sm bg-background/80 border-border/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="modern"
                  className="group"
                >
                  <Tag className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  {category.name}
                  <span className="ml-2 bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Updates Content */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8 py-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Updates />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Subscribe Card */}
              <Card className="shadow-glass backdrop-blur-sm bg-gradient-glass">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Never Miss an Update
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get notified about new posts, artwork, and events.
                  </p>
                  <div className="space-y-4">
                    <Input placeholder="Your email address" />
                    <Button variant="artistic" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Bookmark className="h-5 w-5 mr-2 text-primary" />
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="group cursor-pointer">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contribute */}
              <Card className="shadow-elegant bg-gradient-hero">
                <CardContent className="p-6 text-center">
                  <Plus className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Share Your Story
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Have artwork or achievements to share? Submit your story!
                  </p>
                  <Button variant="artistic" className="w-full">
                    Submit Post
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Submit Form Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Submit Your Update
              </h2>
              <p className="text-xl text-muted-foreground">
                Share your artwork, achievements, or story with our community.
              </p>
            </div>

            <Card className="shadow-artistic">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input placeholder="Enter your name" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Category *
                      </label>
                      <select className="w-full h-12 px-3 border border-input rounded-md bg-background text-foreground">
                        <option value="">Select category</option>
                        <option value="artwork">New Artwork</option>
                        <option value="achievement">Achievement</option>
                        <option value="event">Event</option>
                        <option value="tip">Art Tip</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Title *
                    </label>
                    <Input placeholder="Enter post title" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Content *
                    </label>
                    <Textarea 
                      placeholder="Share your story, describe your artwork, or provide details about your achievement..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Upload Images
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="artistic" size="lg" className="flex-1">
                      Submit for Review
                    </Button>
                    <Button variant="modern" size="lg">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UpdatesPage;