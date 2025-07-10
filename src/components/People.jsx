import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Sidenav from  "./templates/Sidenav"

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await axios.get(`/person/popular`);
      setPeople(response.data.results);
    };
    fetchPeople();
  }, []);

  return ( 
    <>
    <Sidenav/>
    <div className="container mx-auto px-4 py-8">
      
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Popular Celebrities</h2>

      <div className="h-screen overflow-y-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {people.map((person) => (
            <div 
              key={person.id}
              className="bg-gray-800 text-white rounded overflow-hidden shadow w-full max-w-xs"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-2 text-center font-semibold text-sm">
                {person.name}
              </div>
            </div> 
          ))}
        </div>
      </div>
      </div>
      </>
  );
};

export default People;