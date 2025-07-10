import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Sidenav from "./templates/Sidenav";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const response = await axios.get(`/trending/movie/week`);
      setMovies(response.data.results);
    };
    fetchTrending();
  }, []);

  return (
    <>
      <Sidenav/>
    <div className="container mx-auto px-4 py-8">
        <div className="h-screen overflow-y-auto pb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Trending
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 text-white rounded overflow-hidden shadow w-full max-w-xs"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-2 text-center font-semibold text-sm">
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </>
  );
};

export default Trending;