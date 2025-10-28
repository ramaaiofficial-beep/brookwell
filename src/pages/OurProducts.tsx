import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Factory,
  CheckCircle,
  Handshake,
  Globe,
  Wrench,
  Users,
} from "lucide-react";

const OurProducts = () => {
  const [activeProduct, setActiveProduct] = useState("thrie-beam");

  const products = {
    "thrie-beam": {
      title: "Thrie Beam",
      number: "01",
      description:
        "Triple-wave design offers superior strength for high-impact safety.",
      image:
        "https://brookwellindustries.in/wp-content/uploads/2025/09/brookwell-industries-our-products.png",
      link: "/thrie-beam",
    },
    "w-beam": {
      title: "W Beam",
      number: "02",
      description:
        "Durable, galvanized steel barriers ensuring dependable roadside protection.",
      image:
        "https://brookwellindustries.in/wp-content/uploads/2025/09/brookwell-industries-our-products-w-beam.png",
      link: "/w-beam",
    },
  };

  const promises = [
    {
      number: "01",
      icon: Factory,
      title: "Expert Engineers",
      description: "Designs crafted to maximize road safety and performance.",
    },
    {
      number: "02",
      icon: CheckCircle,
      title: "Quality Control System",
      description:
        "Strict inspections guaranteeing quality, durability, and safety.",
    },
    {
      number: "03",
      icon: Handshake,
      title: "Satisfaction Guarantee",
      description:
        "Trusted products with commitment to customer happiness always.",
    },
    {
      number: "04",
      icon: Globe,
      title: "International Business",
      description:
        "Delivering quality crash barriers meeting international standards.",
    },
    {
      number: "05",
      icon: Wrench,
      title: "Unrivalled Workmanship",
      description:
        "Brookwell ensures superior finish, strength, and lasting safety.",
    },
    {
      number: "06",
      icon: Users,
      title: "High Professional Staff",
      description:
        "Professionals committed to excellence, safety, and innovation.",
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://brookwellindustries.in/wp-content/uploads/2025/09/brookwell-industries-our-products.png)`,
            }}
          ></div>
          <div className="relative container mx-auto px-4 h-full flex items-end justify-start">
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white text-left tracking-wider pb-12 pl-8">
              Our Products
            </h1>
          </div>
        </section>

        {/* Product Selection Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="lg:flex lg:items-start lg:gap-8">
              {/* Product Buttons */}
              <div className="flex gap-8 mb-6 lg:mb-0">
                {Object.keys(products).map((key) => {
                  const product = products[key as keyof typeof products];
                  const isActive = activeProduct === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveProduct(key)}
                      className="text-left focus:outline-none flex flex-col items-center"
                    >
                      <div
                        className={`text-xl font-bold transition-colors duration-300 ${
                          isActive ? "text-[#e2b13c]" : "text-gray-600"
                        }`}
                      >
                        {product.number}
                      </div>
                      <div
                        className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                          isActive ? "text-[#e2b13c]" : "text-gray-600"
                        }`}
                      >
                        {product.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Product Image */}
              <div className="flex-1 relative">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={products[activeProduct as keyof typeof products].image}
                    alt={products[activeProduct as keyof typeof products].title}
                    className="w-full h-[300px] md:h-[350px] object-cover transition-all duration-500"
                  />

                  {/* Description */}
                  <div className="absolute bottom-20 right-4 text-right">
                    <p className="text-white text-sm md:text-base leading-relaxed max-w-xs ml-auto">
                      {products[activeProduct as keyof typeof products]
                        .description}
                    </p>
                  </div>

                  {/* Explore More Button */}
                  <div className="absolute bottom-4 right-4">
                    <a
                      href={products[activeProduct as keyof typeof products].link}
                      className="bg-[#e2b13c] hover:bg-[#d4a017] text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 md:py-24 bg-[#002052] text-white">
          <div className="container mx-auto px-4">
            {/* Label */}
            <div className="text-center mb-8">
              <div className="inline-block bg-[#e2b13c] text-[#002052] text-sm font-semibold px-5 py-2 rounded-md uppercase">
                Our Promise
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Always powering your business for{" "}
                <span className="text-[#e2b13c]">over 7 years</span>
              </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promises.map((promise, index) => {
                const Icon = promise.icon;
                return (
                  <div
                    key={index}
                    className="flex bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 group"
                  >
                    {/* Left: Icon + Number */}
                    <div className="flex flex-col items-center mr-6">
                      <div className="bg-[#fff6e1] w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#e2b13c]">
                        <Icon className="w-7 h-7 text-[#e2b13c] transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <div className="text-gray-300 text-4xl font-extrabold opacity-50 mt-2 select-none pointer-events-none">
                        {promise.number}
                      </div>
                    </div>

                    {/* Right: Text */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg md:text-xl font-bold text-[#002052] mb-2">
                        {promise.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurProducts;
