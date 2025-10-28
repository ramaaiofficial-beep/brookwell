import {
  Shield,
  Globe,
  ShieldCheck,
  Wrench,
  Layers,
  Factory,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Impact Resistance",
      number: "01",
      description:
        "Our crash barriers are designed to absorb and withstand high impacts, minimizing damage and protecting lives during unexpected road accidents.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      number: "02",
      description:
        "Manufactured with precision and compliance, our barriers meet international quality benchmarks, ensuring durability, reliability, and trust across diverse infrastructure projects.",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Safety",
      number: "03",
      description:
        "Built to protect motorists, our W-beam and Thrie-beam crash barriers provide advanced safety features that significantly reduce roadside hazards.",
    },
    {
      icon: Wrench,
      title: "Quick Installation",
      number: "04",
      description:
        "Engineered for efficiency, our crash barriers are easy to transport and install, minimizing downtime while ensuring strong, long-lasting performance.",
    },
    {
      icon: Layers,
      title: "Versatile Applications",
      number: "05",
      description:
        "Suitable for highways, bridges, urban roads, and industrial sites, our crash barriers adapt seamlessly to diverse safety infrastructure requirements.",
    },
    {
      icon: Factory,
      title: "Innovative Engineering",
      number: "06",
      description:
        "With cutting-edge designs and technology, our crash barriers offer robust performance, optimized strength, and enhanced functionality for modern infrastructure needs.",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-[#f8f8f8] font-montserrat">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 italic text-[#333] tracking-tight">
          Product Key Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex"
              >
                {/* Left: Icon + Faded Number */}
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-[#fff8e1] w-16 h-16 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[#ffb300]">
                    <Icon className="w-8 h-8 text-[#ffb300] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Faded Number below the icon, inside card */}
                  <div className="mt-2 text-gray-300 text-5xl font-extrabold opacity-30 pointer-events-none select-none">
                    {feature.number}
                  </div>
                </div>

                {/* Right: Title + Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold italic text-[#333] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed font-normal">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
