import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  // ✅ YOUR REAL LOCATION
  const address = "Madina Mall, Mohammed Yusuf Haji Ave, Starehe, Nairobi";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const embedUrl =
    "https://www.google.com/maps?q=Madina+Mall+Mohammed+Yusuf+Haji+Ave+Starehe&output=embed";

  return (
    <section id="location" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Visit Cozy Café
          </h2>
          <p className="text-muted-foreground text-lg">
            We’re conveniently located at Madina Mall in Starehe. Stop by for
            great coffee, snacks, and a cozy place to relax.
          </p>
        </div>

        {/* Map and Info */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/50 min-h-[400px]">
            <iframe
              title="Cozy Café Location"
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

              {/* Nearby Landmarks */}
              <div className="p-4 bg-secondary/50 rounded-xl border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Nearby:</strong> Madina
                  Mall entrances, major bus and matatu routes within walking
                  distance.
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
                    Easily accessible by matatu and bus
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Located inside Madina Mall
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Parking available at the mall
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
