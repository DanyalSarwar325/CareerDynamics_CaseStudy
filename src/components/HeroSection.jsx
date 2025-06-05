import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 mt-[150px] md:mt-0 space-y- md:space-y-0 md:space-x-8">
      
      {/* Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0E2148] mb-4">
          Explore the World
        </h1>
        <p className="text-3xl md:text-5xl font-serif mb-6">
          Faster with LocalVibe
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition cursor-pointer">
          Explore Now
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-[400px] flex justify-center mb-6 md:mb-0">
        <img
          src="/images.jpeg"
          alt="This is an Image"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
