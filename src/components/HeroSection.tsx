import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee-shop.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Open Daily · 7AM - 9PM
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            The Cozy Bean
          </h1>

          {/* Slogan */}
          <p
            className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 animate-fade-up font-display italic"
            style={{ animationDelay: "0.2s" }}
          >
            Fresh Coffee. Cozy Moments.
          </p>

          {/* Description */}
          <p
            className="text-lg text-white/70 max-w-xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Your neighborhood coffee sanctuary where every cup is crafted with
            love and every visit feels like coming home.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/1234567890?text=Hi! I'd like to make an order"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
              asChild
            >
              <a href="#menu">View Our Menu</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-float"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
