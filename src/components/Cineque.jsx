import React from "react";

const Cineque = () => {
  return (
    <div className="min-h-screen w-full bg-indigo-600 flex items-center justify-center p-4">
      
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-4xl w-full text-center space-y-6 border border-indigo-300">
       
        <h1 className="text-3xl font-bold text-white">
          🎬 Welcome to Cineque
        </h1>
        
        <p className="text-lg font-medium text-gray-200">
          Your all-in-one destination for discovering, exploring, and keeping track of
          movies, TV shows, and celebrities.
        </p>
        
        
        <div className="grid sm:grid-cols-2 gap-6 px-2 text-left">
          <div className="bg-indigo-700 rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold text-white mb-3">🔍 Discover</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Trending movies and TV shows</li>
              <li>Curated lists and genres</li>
              <li>Daily updates on new releases</li>
            </ul>
          </div>
          
          <div className="bg-indigo-700 rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold text-white mb-3">✨ Features</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Trailers, ratings & summaries</li>
              <li>Cast info and biographies</li>
              <li>Search and filter easily</li>
            </ul>
          </div>
        </div>
        
        <button className="mt-4 px-6 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600">
          Get Started
        </button>
        
        <p className="text-sm text-gray-300">
          Cineque helps entertainment lovers enjoy, explore, and track their favorite titles — all in one place. 🚀
        </p>
      </div>
    </div>
  );
};

export default Cineque;