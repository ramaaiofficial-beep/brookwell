import { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import weldingImage from "@/assets/welding-worker.jpg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("history");
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [contentToShow, setContentToShow] = useState("history");
  const [counter, setCounter] = useState(0);
  const [headingRevealed, setHeadingRevealed] = useState(false);
  const [firstImageVisible, setFirstImageVisible] = useState(false);
  const [secondImageVisible, setSecondImageVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const firstImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "history", label: "Our History" },
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const firstImageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFirstImageVisible(true), 300);
        }
      },
      { threshold: 0.3 }
    );

    const secondImageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setSecondImageVisible(true), 600);
        }
      },
      { threshold: 0.3 }
    );

    if (firstImageRef.current) firstImageObserver.observe(firstImageRef.current);
    if (secondImageRef.current) secondImageObserver.observe(secondImageRef.current);

    return () => {
      if (firstImageRef.current) firstImageObserver.unobserve(firstImageRef.current);
      if (secondImageRef.current) secondImageObserver.unobserve(secondImageRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const counterTimer = setTimeout(() => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setCounter(count);
          if (count >= 7) clearInterval(interval);
        }, 100);
      }, 600);

      const headingTimer = setTimeout(() => {
        setHeadingRevealed(true);
      }, 600);

      return () => {
        clearTimeout(counterTimer);
        clearTimeout(headingTimer);
      };
    }
  }, [isVisible]);

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setIsFadingOut(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setContentToShow(tabId);
        setIsFadingOut(false);
      }, 200);
    }
  };

  const tabFeatures: Record<string, string[]> = {
    history: ["Trusted Quality", "Growth Focus"],
    mission: ["Safety First", "Sustainable Growth"],
    vision: ["Global Standards", "Lasting Impact"],
  };

  const tabParagraphs: Record<string, string> = {
    history:
      "Incorporated in 2018, Brookwell Industries quickly established itself as a trusted name in crash barrier manufacturing, committed to advancing road safety through high-quality, innovative, and reliable infrastructure solutions.",
    mission:
      "Our mission is to manufacture superior crash barriers that protect lives, ensure road safety, and contribute to India's growing infrastructure needs with innovation, efficiency, and uncompromised reliability.",
    vision:
      "We envision becoming India's leading crash barrier manufacturer, driving innovation in safety engineering and building world-class infrastructure solutions that safeguard every journey, across every highway, for future generations.",
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-8 md:py-12 bg-gray-50 overflow-hidden font-montserrat"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ---------- IMAGE SECTION ---------- */}
          <div className="relative w-full flex justify-center items-center">
            <div 
              ref={firstImageRef}
              className={`relative w-full md:w-[90%] z-10 transition-all duration-1200 ease-out ${
                firstImageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
              }`}
            >
              <img
                src={weldingImage}
                alt="Welding work"
                className="rounded-lg shadow-2xl w-full h-[250px] md:h-[350px] object-cover"
              />
              <div className="absolute top-4 right-4 text-[#d4a017] text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold">
                  {counter}+
                </div>
                <div className="text-sm md:text-base font-semibold mt-1">
                  Years of Experience
                </div>
              </div>
            </div>
            <div 
              ref={secondImageRef}
              className={`hidden md:block absolute top-40 left-[80px] w-[90%] z-20 transition-all duration-1200 ease-out ${
                secondImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <img
                src="https://brookwellindustries.in/wp-content/uploads/2025/09/brookwell-indsutries-about-thumb-1-e1758705017177.png"
                alt="Factory floor"
                className="rounded-lg shadow-xl w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* ---------- CONTENT SECTION ---------- */}
          <div
            className={`transition-all duration-600 ease-out mt-8 md:mt-0 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-block bg-[#e2b13c]/10 text-[#e2b13c] px-4 py-2 rounded-full mb-6">
              <span className="font-bold">About Us</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a3a5c] mb-6 leading-tight break-words">
              {"Engineering Safer Roads".split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ease-out ${
                    headingRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
              <br />
              {"Together".split("").map((letter, index) => (
                <span
                  key={`together-${index}`}
                  className={`inline-block transition-all duration-500 ease-out ${
                    headingRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${
                      ("Engineering Safer Roads".length + index) * 50
                    }ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-normal">
              Established in 2018, Brookwell Industries Pvt. Ltd. is a trusted
              name in crash barrier manufacturing across India. We specialize in{" "}
              <strong>W-Beam</strong> and <strong>Thrie-Beam crash barriers</strong>,
              engineered to international standards for maximum road safety. With a
              strong focus on quality, innovation, and reliability, we strive to
              protect lives and infrastructure through our durable and tested
              safety solutions.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-8 mb-6 border-b border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`pb-2 md:pb-3 font-bold transition-colors relative ${
                    activeTab === tab.id
                      ? "text-[#e2b13c]"
                      : "text-gray-600 hover:text-[#1a3a5c]"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e2b13c]" />
                  )}
                </button>
              ))}
            </div>

            <div
              className={`mb-6 text-gray-700 leading-relaxed transition-all duration-600 ease-out font-normal ${
                isVisible && !isFadingOut
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p>{tabParagraphs[contentToShow]}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {tabFeatures[contentToShow].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e2b13c]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#e2b13c]" />
                  </div>
                  <span className="font-semibold text-[#1a3a5c]">{feature}</span>
                </div>
              ))}
            </div>

            {/* ---------- EXPLORE MORE BUTTON ---------- */}
            <div className="mt-8">
              <a
                href="https://industrie.rstheme.com/metallurgy/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="relative px-8 py-3 text-white font-semibold skew-x-[-15deg] bg-[#e2b13c] overflow-hidden group">
                  <span className="absolute inset-0 bg-red-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 block skew-x-[15deg]">Explore More</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;