import React from "react";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";

const Landing: React.FC = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;
