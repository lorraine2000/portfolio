import React from "react";
import { Route, Routes } from "react-router-dom";

// Importing route components
import Home from "../Components/Menu/Home";
import Projects from "../Components/Menu/Projects";
import Contact from "../Components/Menu/Contact";
import Services from "../Components/Menu/Services";
import ProjectDetails from "../Components/Menu/ProjectDetails";
import Expertise from "../Components/Menu/Expertise";
import BlogInsights from "../Components/Menu/BlogInsights";

// Central route configuration for the app
const RoutesPath = () => {
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />

      {/* Expertise page */}
      <Route path="/expertise" element={<Expertise />} />

      {/* Projects listing */}
      <Route path="/project" element={<Projects />} />

      {/* Individual project details using dynamic route */}
      <Route path="/project/:id" element={<ProjectDetails />} />

      {/* Services offered */}
      <Route path="/services" element={<Services />} />

      {/* Contact page */}
      <Route path="/contact" element={<Contact />} />

      {/* Blog and insights */}
      <Route path="/blog-insights" element={<BlogInsights />} />
    </Routes>
  );
};

export default RoutesPath;
