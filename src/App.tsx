import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);
  
  return null;
};
import NotFound from "./pages/NotFound";
import Server from "./pages/Server";
import ServerInfo from "./pages/ServerInfo";
import AboutUs from "./pages/AboutUs";
import Initiatives from "./pages/Initiatives";
import Volunteer from "./pages/Volunteer";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";
import OurWork from "./pages/OurWork";
import Resources from "./pages/Resources";
import Impact from "./pages/Impact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/server" element={<Server />} />
          <Route path="/server-info" element={<ServerInfo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/impact" element={<Impact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
