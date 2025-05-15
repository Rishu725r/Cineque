import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="p-3 text-white text-2xl rounded-lg m-4 hover:text-[#6556CD] transition duration-300"
        onClick={toggleSidenav}
      >
        ☰
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-gray-900 text-white p-5 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="text-white text-sm absolute top-4 right-1 z-50 p-3"
          onClick={toggleSidenav}
        >
          ✖
        </button>

        <h1
          className="text-2xl font-bold mb-5 cursor-pointer hover:text-[#6556CD] transition duration-300"
          onClick={() => window.location.reload()}
        >
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          Cineque.
        </h1>

        <nav className="flex flex-col gap-3">
          <h1 className="text-white font-semibold text-xl mt-5 mb-3">
            New Feeds
          </h1>
          <Link
            to="/trending"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <span>🔥</span> Trending
          </Link>

          <Link
            to="/popular"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <span>✨</span> Popular
          </Link>

          <Link
            to="/movies"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <span>🎬</span> Movies
          </Link>

          <Link
            to="/tvshows"
            className="flex items-center gap-2 text-white hover:text-indigo-400"
          >
            <i className="fas fa-tv"></i>
            📺 Tv Shows
          </Link>

          <Link
            to="/people"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <span>👥</span> People
          </Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-400 my-4" />

        <nav className="flex flex-col gap-3">
          <h1 className="text-white font-semibold text-xl mt-5 mb-3">
            Website Information
          </h1>
          <Link
            to="/cineque"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <span>🎬</span> Cineque
          </Link>

          <Link to="/contact" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <span>📞</span> Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;
