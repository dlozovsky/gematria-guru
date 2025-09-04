import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NumberMaps from "./pages/NumberMaps";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import LearningModules from "./pages/LearningModules";
import IntroModule from "./pages/modules/IntroModule";
import SystemsModule from "./pages/modules/SystemsModule";
import AdvancedModule from "./pages/modules/AdvancedModule";
import HebrewAlphabetModule from "./pages/modules/HebrewAlphabetModule";
import TorahGematriaModule from "./pages/modules/TorahGematriaModule";
import NameGematriaModule from "./pages/modules/NameGematriaModule";
import NumberMysticismModule from "./pages/modules/NumberMysticismModule";
import PracticalApplicationsModule from "./pages/modules/PracticalApplicationsModule";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/number-maps" element={<NumberMaps />} />
            <Route path="/learning" element={<LearningModules />} />
            <Route path="/learning/intro" element={<IntroModule />} />
            <Route path="/learning/hebrew-alphabet" element={<HebrewAlphabetModule />} />
            <Route path="/learning/systems" element={<SystemsModule />} />
            <Route path="/learning/advanced" element={<AdvancedModule />} />
            <Route path="/learning/torah-gematria" element={<TorahGematriaModule />} />
            <Route path="/learning/name-gematria" element={<NameGematriaModule />} />
            <Route path="/learning/number-mysticism" element={<NumberMysticismModule />} />
            <Route path="/learning/practical-applications" element={<PracticalApplicationsModule />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
