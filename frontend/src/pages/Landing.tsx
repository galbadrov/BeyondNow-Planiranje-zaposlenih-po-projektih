import React from "react";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";

const Landing: React.FC = () => {
  return (
    <div className='min-h-screen bg-white relative overflow-hidden'>
      {/* DOTS */}
      <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e0e7ff_1px,transparent_2.5px)] bg-[size:40px_40px] opacity-80 animate-diagonal-move z-0' />

      <div className='relative z-10'>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
