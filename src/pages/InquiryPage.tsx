import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import inquiryImage from "@/assets/inquiry-image.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InquiryPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiry: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.inquiry) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setResult("Sending...");

    const formDataToSend = new FormData(e.target as HTMLFormElement);
    formDataToSend.append("access_key", "277bdd8c-91a9-493f-8606-b940c12946ab");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          inquiry: "",
          message: "",
        });
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://brookwellindustries.in/wp-content/uploads/2025/09/brookwell-industries-inquiry.png)` }}
          >
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-end justify-start pb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary-foreground tracking-wider">
              Inquiry
            </h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 md:py-12 bg-background font-montserrat">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="order-2 md:order-1">
                <img
                  src={inquiryImage}
                  alt="Inquiry"
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
              </div>

              {/* Form */}
              <div className="order-1 md:order-2 bg-card p-8 md:p-12 rounded-lg shadow-xl border border-border">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-wide">
                  Request a Quote Today
                </h2>
                <p className="text-muted-foreground mb-8 font-normal">
                  Share your requirements, and our team will respond with tailored solutions quickly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-background border-border font-normal"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border font-normal"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Your Inquiry"
                      value={formData.inquiry}
                      onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                      className="bg-background border-border font-normal"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Write Here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border min-h-[120px] font-normal"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full gap-2 font-normal">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </Button>
                  {result && <p className="mt-4 text-sm text-center">{result}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InquiryPage;
