import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Art Gallery
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our complete collection of original artworks, featuring pieces 
                from our talented instructors and advanced students. Each piece tells 
                a unique story of artistic expression and technical mastery.
              </p>
            </div>
          </div>
        </section>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;