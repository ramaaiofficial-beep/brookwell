import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUsPage from "src/pages/AboutUsPage";
import ThrieBeamPage from "src/pages/ThrieBeamPage";
import InquiryPage from "src/pages/InquiryPage";
import ContactUsPage from "src/pages/ContactUsPage";
import OurProducts from "src/pages/OurProducts";
import NotFound from "src/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/thrie-beam" element={<ThrieBeamPage />} />
          <Route path="/inquiry" element={<InquiryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/our-products" element={<OurProducts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
