// import { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import { Link } from "react-router-dom";

// const HorizontalCards = () => {
//   const [movies, setMovies] = useState([]);

//   const getTrendingMovies = async () => {
//     try {
//       const { data } = await axios.get(`/trending/movie/week`);
//       setMovies(data.results);
//     } catch (error) {
//       console.error("Error fetching trending movies", error);
//     }
//   };

//   useEffect(() => {
//     getTrendingMovies();
//   }, []);

//   return (
//     <div className="px-6 py-8">
//       <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
//         Trending
//       </h2>

//       <div className="flex overflow-x-auto gap-4 scrollbar-hide">
//         {movies.map((movie) => (
//           <Link
//             to={`/movie/${movie.id}`}
//             key={movie.id}
//             className="min-w-[160px] md:min-w-[200px] bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//               alt={movie.title}
//               className="w-full h-[240px] object-cover"
//             />
//             <div className="p-2 text-center">
//               <h3 className="text-white text-sm md:text-base font-medium truncate">
//                 {movie.title}
//               </h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HorizontalCards;


import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

const HorizontalCards = () => {
  const [movies, setMovies] = useState([]);

  const getTrendingMovies = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/week`);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching trending movies", error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 px-6">
        Trending
      </h2>

     <div className="overflow-x-auto no-scrollbar px-6 pb-4">

        <div className="flex gap-4">
          {movies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="min-w-[160px] md:min-w-[200px] bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[240px] object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="text-white text-sm md:text-base font-medium truncate">
                  {movie.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
