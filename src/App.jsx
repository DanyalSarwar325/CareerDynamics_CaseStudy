import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import {EventCard} from './components/EventCard.jsx'
import events from './data/events.json' // Assuming you have a JSON file with event data
 
function App() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
    
    <Navbar />
    <HeroSection/>
   
     
     <div className=' bg-gray-100' >
       <h1 className="text-4xl text-[#0E2148] text-center pt-5 font-bold">Upcoming Events</h1>
      <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-wrap gap-6 justify-center">

      {events.map(event => (
        <EventCard key={event.id} event={event} searchTerm={searchTerm}/>
      ))}
    </div>
    </div>
  
    
   
    
    </>
  )
}

export default App
