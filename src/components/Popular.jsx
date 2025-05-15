import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const response = await axios.get(`/movie/popular`);
      setMovies(response.data.results);
    };
    fetchPopular();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white p-8">
  <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Popular Movies</h2>

      <div className="grid grid-cols-2 gap-6 p-8 w-full h-[80vh]">
        {movies.slice(0, 4).map((movie) => (
          <div
            key={movie.id}
            className="relative overflow-hidden rounded-lg shadow-lg h-full"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
              <h2 className="text-lg font-bold truncate">{movie.title}</h2>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-yellow-400 font-bold">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
