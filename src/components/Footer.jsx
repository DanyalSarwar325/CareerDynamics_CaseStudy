import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0E2148] text-white pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">LocalVibe</h2>
          <p className="text-sm">
            Discover local events, connect with your community, and experience the vibe of your city.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#events" className="hover:text-pink-400 transition">Events</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@localvibe.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Address: Rawalpindi, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LocalVibe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
