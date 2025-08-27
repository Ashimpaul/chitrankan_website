import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Gallery from "../pages/GalleryPage";
import About from "../pages/AboutPage";
import Services from "../pages/ServicesPage";
import Updates from "../pages/UpdatesPage";
import Contact from "../pages/ContactPage";
import NotFound from "../pages/NotFound";

export const AppRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);