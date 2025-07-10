import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Sidenav from "./templates/Sidenav";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`/movie/top_rated`);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Sidenav/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Top Rated Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {movies.slice(0, 10).map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white rounded-lg shadow w-full max-w-xs p-4 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-lg font-bold text-center mb-2">{movie.title}</h2>
            <ul className="text-sm list-disc list-inside space-y-1 text-gray-300">
              <li><strong>Release:</strong> {movie.release_date}</li>
              <li><strong>Rating:</strong> {movie.vote_average}</li>
              <li><strong>Votes:</strong> {movie.vote_count}</li>
              <li><strong>Language:</strong> {movie.original_language.toUpperCase()}</li>
              <li>{movie.overview.slice(0, 40)}...</li>
            </ul>
          </div>
        ))}
      </div>
      </div>
      </>
  );
};

export default Movies;
