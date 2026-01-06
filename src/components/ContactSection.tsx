import { Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+254 799 363 883";
  const whatsappNumber = "0799363883";
  const email = "amohakaka@gmail.com";

  const hours = [
    { day: "Monday - Friday", time: "7:00 AM - 3:00 AM" },
    { day: "Saturday", time: "8:00 AM - 2:00 AM" },
    { day: "Sunday", time: "8:00 AM - 2:00 AM" },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-primary text-primary-foreground"
    >
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
            Contact Us
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Have a question or want to place an order? Reach out to us – we'd
            love to hear from you!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/20 text-accent mb-5">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Call Us</h3>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, "")}`}
              className="text-primary-foreground/80 hover:text-accent transition-colors text-lg"
            >
              {phoneNumber}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#25D366]/20 text-[#25D366] mb-5">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              WhatsApp
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              Message us anytime
            </p>
          </div>

          {/* Email */}
          <div className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/20 text-accent mb-5">
              <Mail className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-primary-foreground/80 hover:text-accent transition-colors text-lg"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="max-w-md mx-auto bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 p-8 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-accent" />
            <h3 className="font-display text-2xl font-semibold">
              Opening Hours
            </h3>
          </div>
          <div className="space-y-3">
            {hours.map((schedule) => (
              <div
                key={schedule.day}
                className="flex justify-between items-center py-2 border-b border-primary-foreground/10 last:border-0"
              >
                <span className="text-primary-foreground/80">
                  {schedule.day}
                </span>
                <span className="font-semibold">{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <p className="text-primary-foreground/70 mb-6">
            Ready to order? Message us on WhatsApp for quick service!
          </p>
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order at The Cozy Bean.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Order or Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
