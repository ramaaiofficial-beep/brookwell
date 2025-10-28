import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import aboutHeroImage from "@/assets/about-hero.png";
import ourJourneyImage from "@/assets/our-journey.png";
import factoryFloorImage from "@/assets/factory-floor.jpg";
import inquiryImage from "@/assets/inquiry-image.png";
import { useState } from "react";

const CompanyJourney = () => {
  const [activeYear, setActiveYear] = useState("2018");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const journeyData = {
    "2018": {
      title: "Journey Was Started",
      description: "Brookwell Industries was founded with a vision to enhance road safety across India. Starting small, we focused on designing durable crash barriers while establishing a strong foundation for quality, reliability, and innovation in every product we delivered to our clients.",
      image: ourJourneyImage
    },
    "2022": {
      title: "Expansion & Growth",
      description: "By 2022, Brookwell Industries expanded its manufacturing capabilities, adopted international safety standards, and built a reputation for engineering excellence. Our commitment to innovation and timely delivery strengthened partnerships with clients nationwide, making us a trusted name in the road safety and crash barrier industry.",
      image: factoryFloorImage
    },
    "2025": {
      title: "Industry Leadership",
      description: "In 2025, we emerged as a leading crash barrier manufacturer in Telangana, blending advanced technology, sustainable practices, and engineering expertise. Our products now ensure enhanced safety on roads while reflecting our dedication to innovation, quality, and a safer driving environment for every community.",
      image: inquiryImage
    }
  };

  const handleYearChange = (year: string) => {
    if (year === activeYear) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveYear(year);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 30);
    }, 200);
  };

  return (
    <section className="py-8 md:py-12 bg-white font-montserrat">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1a3a5c] mb-8">
          Company Journey
        </h2>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-12">
            {Object.keys(journeyData).map((year, index) => (
              <div key={year} className="flex items-center">
                <button
                  onClick={() => handleYearChange(year)}
                  className={`text-base font-bold transition-all duration-300 ${
                    activeYear === year
                      ? "text-[#ff8c00] border-b-2 border-[#ff8c00] pb-1"
                      : "text-gray-600 hover:text-[#1a3a5c]"
                  }`}
                >
                  In {year}
                </button>
                {index < Object.keys(journeyData).length - 1 && (
                  <div className="w-px h-4 bg-gray-300 ml-12" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex items-start gap-8">
          {/* Image */}
          <div className="flex-shrink-0 w-[45%]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={journeyData[activeYear as keyof typeof journeyData].image}
                alt={`Company Journey ${activeYear}`}
                className={`w-full h-[280px] object-cover transition-all duration-500 ease-out transform hover:scale-105 ${
                  isTransitioning ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'
                }`}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-[55%]">
            <div className={`transition-all duration-500 ease-out ${
              isTransitioning ? 'opacity-0 translate-y-16' : 'opacity-100 translate-y-0'
            }`}>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a3a5c] mb-4">
                {journeyData[activeYear as keyof typeof journeyData].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
                {journeyData[activeYear as keyof typeof journeyData].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${aboutHeroImage})`,
              filter: 'blur(2px)',
              transform: 'scale(1.05)'
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-end justify-start">
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white text-left tracking-wider pb-12 pl-8">
              About Us
            </h1>
          </div>
        </section>

        {/* AboutUs Component */}
        <AboutUs />

        {/* Company Journey Component */}
        <CompanyJourney />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;