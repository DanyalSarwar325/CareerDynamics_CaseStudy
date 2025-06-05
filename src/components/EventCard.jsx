import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export const EventCard = ({ event }) => {

  
  return (
    <section id="#events">
    <div className="max-w-[250px]   rounded-xl overflow-hidden shadow-lg transition duration-300 border border-gray-200 hover:border-pink-500 hover:shadow-pink-300 hover:shadow-md cursor-pointer">
      <img
        className="w-full h-40 object-cover"
        src={event.image}
        alt={event.eventName}
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold mb-2">{event.eventName}</h2>
          <p className="text-gray-600 text-sm mb-4">{event.description}</p>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-blue-500" />
            {event.time}
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-[#0E2148] text-white text-sm px-4 py-2 rounded-full transition">
            Register
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EventCard;
