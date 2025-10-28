import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Thrie Beam",
      description:
        "Advanced Thrie Beam barriers providing enhanced protection and impact resistance.",
      image:
        "https://brookwellindustries.in/wp-content/uploads/2025/09/brookwell-indsutries-thrie-beam-thumb-e1758702028157.png",
      link: "/thrie-beam",
    },
    {
      title: "W Beam",
      description:
        "High-strength, durable W Beam crash barriers for superior road safety.",
      image:
        "https://brookwellindustries.in/wp-content/uploads/2025/09/brookwell-industries-w-beam-thumb.png",
      link: "/w-beam",
    },
  ];

  return (
    <section id="products" className="py-8 md:py-12 bg-white font-montserrat">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#fdece6] text-[#e97132] px-6 py-2 rounded-md font-bold italic">
            Our Products
          </div>
        </div>

        {/* ---------- MAIN CONTENT ---------- */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* LEFT COLUMN - TEXT */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1b2d] mb-6 leading-snug italic">
              Engineered for Safety, Built to Last
            </h2>
            <p className="text-gray-600 leading-relaxed text-[17px] font-normal">
              Engineered for maximum impact resistance, our crash barriers
              ensure road safety, compliance with global standards, and
              versatile, quick installations across applications.
            </p>
          </div>

          {/* RIGHT SIDE - PRODUCTS GRID */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#f9fafc] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold italic text-[#0f1b2d] mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-[15px] font-normal">
                      {product.description}
                    </p>
                  </div>
                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 text-[#0f1b2d] font-semibold italic hover:text-[#e97132] transition-colors group/link"
                  >
                    View Details
                    <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center group-hover/link:bg-[#e97132] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-700 group-hover/link:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
