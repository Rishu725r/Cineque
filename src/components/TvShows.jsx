import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      const response = await axios.get(`/tv/popular`);
      setTvShows(response.data.results);
    };
    fetchTvShows();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Popular TV Shows</h2>

      <div className="h-screen overflow-y-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {tvShows.map((show) => (
            <div key={show.id} className="relative w-52 h-72 text-white perspective">
              <div className="w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">

                {/* Front Side with Poster */}
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side with Info */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-800 rounded-lg p-4 overflow-auto text-sm">
                  <h3 className="text-lg font-bold mb-2 text-center">{show.name}</h3>
                  <p><strong>Air Date:</strong> {show.first_air_date}</p>
                  <p><strong>Rating:</strong> {show.vote_average}</p>
                  <p><strong>Language:</strong> {show.original_language.toUpperCase()}</p>
                  <p className="mt-2"><strong>Overview:</strong> {show.overview.slice(0, 100)}...</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvShows;
