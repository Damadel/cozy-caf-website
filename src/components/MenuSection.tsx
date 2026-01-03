import { Coffee, Leaf, Cookie } from "lucide-react";

const MenuSection = () => {
  const menuCategories = [
    {
      title: "Coffee",
      icon: Coffee,
      items: [
        { name: "Espresso", description: "Rich, bold single shot", price: "$3.50" },
        { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$4.50" },
        { name: "Caffè Latte", description: "Smooth espresso with silky milk", price: "$5.00" },
        { name: "Mocha", description: "Espresso with chocolate and milk", price: "$5.50" },
        { name: "Americano", description: "Espresso with hot water", price: "$4.00" },
        { name: "Cold Brew", description: "Slow-steeped for 20 hours", price: "$5.00" },
      ],
    },
    {
      title: "Other Drinks",
      icon: Leaf,
      items: [
        { name: "Chai Latte", description: "Spiced tea with steamed milk", price: "$4.50" },
        { name: "Matcha Latte", description: "Premium Japanese green tea", price: "$5.50" },
        { name: "Hot Chocolate", description: "Rich Belgian chocolate", price: "$4.00" },
        { name: "Herbal Tea", description: "Selection of organic teas", price: "$3.50" },
      ],
    },
    {
      title: "Snacks & Pastries",
      icon: Cookie,
      items: [
        { name: "Butter Croissant", description: "Flaky, golden, fresh-baked", price: "$4.00" },
        { name: "Chocolate Chip Cookie", description: "Warm, gooey, homemade", price: "$3.00" },
        { name: "Blueberry Muffin", description: "Bursting with fresh berries", price: "$3.50" },
        { name: "Carrot Cake", description: "Cream cheese frosting", price: "$5.00" },
        { name: "Avocado Toast", description: "Sourdough with fresh avocado", price: "$8.00" },
      ],
    },
  ];

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What We Serve
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg">
            Every item is crafted with care using the finest ingredients. From
            our signature espresso to freshly baked pastries, taste the
            difference quality makes.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-primary p-6 flex items-center gap-4">
                <div className="p-3 bg-primary-foreground/10 rounded-xl">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-1">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-start py-4 ${
                      index !== category.items.length - 1
                        ? "border-b border-border/50"
                        : ""
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12">
          * All prices include tax. Dairy alternatives available for +$0.75
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
