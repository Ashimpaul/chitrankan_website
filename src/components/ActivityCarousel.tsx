import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import heroArt from '@/assets/hero-art.jpg';

interface ActivityImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const activities: ActivityImage[] = [
  {
    src: artwork1,
    alt: 'Art Workshop',
    title: 'Art Workshops',
    description: 'Interactive sessions for all skill levels'
  },
  {
    src: artwork2,
    alt: 'Exhibition',
    title: 'Art Exhibitions',
    description: 'Showcasing student and faculty artwork'
  },
  {
    src: artwork3,
    alt: 'Painting Class',
    title: 'Painting Classes',
    description: 'Learn various techniques and styles'
  },
  {
    src: heroArt,
    alt: 'Art Competition',
    title: 'Art Competitions',
    description: 'Participate in themed contests'
  }
];

const ActivityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 4000); // Change image every 4 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    if (isAutoPlaying) {
      stopAutoPlay();
      startAutoPlay();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
    if (isAutoPlaying) {
      stopAutoPlay();
      startAutoPlay();
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the diverse range of artistic activities and events we offer throughout the year
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-artistic group">
          {/* Carousel Container */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {activities.map((activity, index) => (
              <div key={index} className="min-w-full relative">
                <img 
                  src={activity.src} 
                  alt={activity.alt}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                  <div className="text-left transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                    <p className="text-white/90">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  if (isAutoPlaying) {
                    stopAutoPlay();
                    startAutoPlay();
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-white/50 hover:bg-white/70'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityCarousel;