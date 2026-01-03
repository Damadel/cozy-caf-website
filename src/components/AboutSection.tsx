import { Coffee, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Coffee,
      title: "Freshly Roasted",
      description: "We source and roast our beans locally for the freshest taste in every cup.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every drink is handcrafted by our passionate baristas who care about quality.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "More than a café – we're your neighborhood gathering place for connection.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            More Than Just Coffee
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nestled in the heart of the neighborhood, The Cozy Bean has been
            serving the community since 2018. We believe that great coffee is
            about more than just the brew – it's about the warmth of the space,
            the smile of the barista, and the feeling of being welcomed home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic text-foreground/80 max-w-3xl mx-auto">
            "The best coffee is the one shared with good company."
          </blockquote>
          <p className="text-muted-foreground mt-4">— The Cozy Bean Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
