import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './src/pages/HomePage';
import { AboutPage } from "./src/pages/AboutPage";
import { GalleryPage } from "./src/pages/GalleryPage";
import { ServicesPage } from "./src/pages/ServicesPage";
import { ContactPage } from "./src/pages/ContactPage";
import { NoPage } from "./src/pages/NoPage";
import { TeamPage } from "./src/pages/TeamPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="noPage" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
