import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Share2 } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const artworks = [
    {
      id: 1,
      title: "Golden Landscape",
      category: "landscape",
      image: artwork1,
      price: "$1,200",
      description: "A stunning landscape painting capturing the golden hour",
      available: true,
    },
    {
      id: 2,
      title: "Portrait Study",
      category: "portrait",
      image: artwork2,
      price: "$800",
      description: "Watercolor portrait demonstrating advanced technique",
      available: true,
    },
    {
      id: 3,
      title: "Abstract Expression",
      category: "abstract",
      image: artwork3,
      price: "$950",
      description: "Contemporary abstract piece with vibrant colors",
      available: false,
    },
    {
      id: 4,
      title: "Serene Waters",
      category: "landscape",
      image: artwork1,
      price: "$1,100",
      description: "Peaceful water scene in oils",
      available: true,
    },
    {
      id: 5,
      title: "Character Study",
      category: "portrait",
      image: artwork2,
      price: "$750",
      description: "Detailed character portrait in watercolor",
      available: true,
    },
    {
      id: 6,
      title: "Color Symphony",
      category: "abstract",
      image: artwork3,
      price: "$1,350",
      description: "Bold abstract composition",
      available: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Artworks" },
    { id: "landscape", name: "Landscapes" },
    { id: "portrait", name: "Portraits" },
    { id: "abstract", name: "Abstract" },
  ];

  const filteredArtworks = selectedCategory === "all" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Art Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of original artworks, available for purchase 
            and created by our talented instructors and advanced students.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "artistic" : "elegant"}
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-[120px]"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-artistic transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="icon" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-8 w-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                {/* Availability Badge */}
                {!artwork.available && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Sold
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {artwork.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {artwork.description}
                </p>
                <div className="flex space-x-3">
                  <Button variant="artistic" size="sm" className="flex-1">
                    {artwork.available ? "Purchase" : "Inquire"}
                  </Button>
                  <Button variant="elegant" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;