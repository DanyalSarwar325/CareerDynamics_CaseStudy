import { useEffect, useRef, useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import { EventCard } from './components/EventCard.jsx';
import events from './data/events.json';
import Footer from './components/Footer.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const eventsRef = useRef(null); // ✅ Add ref

  useEffect(() => {
    setData(events);
  }, []);

  // ✅ Scroll into view when user starts typing
  useEffect(() => {
    if (query.trim() !== '' && eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [query]);

  return (
    <>
      <Navbar setQuery={setQuery} />
      <HeroSection />
     
      <div id='events' className="bg-gray-100" ref={eventsRef}> 
        <h1 className="text-4xl text-[#0E2148] text-center pt-5 font-bold">Upcoming Events</h1>
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-wrap gap-6 justify-center">
          {data
            .filter((item) => item.eventName.toLowerCase().includes(query.toLowerCase()))
            .map((item) => (
              <EventCard key={item.id} event={item} />
            ))}
        </div>
      </div>
      <Footer />
     
    </>
  );
}

export default App;
