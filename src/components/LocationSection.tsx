import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const address = "123 Main Street, Downtown District, New York, NY 10001";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919584!2d-74.00425878459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus";

  return (
    <section id="location" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground text-lg">
            We're located in the heart of downtown, just a short walk from the
            central station. Stop by and experience the warmth of The Cozy Bean.
          </p>
        </div>

        {/* Map and Info */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/50 min-h-[400px]">
            <iframe
              title="The Cozy Bean Location"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Info Card */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-soft p-8 lg:p-10 flex flex-col justify-center">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Our Address
                  </h3>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>

              {/* Parking Info */}
              <div className="p-4 bg-secondary/50 rounded-xl border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Parking:</strong> Free
                  street parking available. The Central Parking Garage is just
                  one block away.
                </p>
              </div>

              {/* Getting Here */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Getting Here
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    5 min walk from Central Station
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Bus lines 12, 24, 36 stop nearby
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Bike racks available outside
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
