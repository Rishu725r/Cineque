import React from "react";

const Header = ({ data }) => {
  console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7), rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition:"top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60%] flex flex-col justify-end items-start p-[4%] rounded"
    >
      <h1 className="w-[70%] text-5xl font-serif text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-2 mb-2 p-1 text-white">{data.overview.slice(0, 200)}</p>
      <p className="text-white ml-2">
        <i class="text-yellow-500 ri-megaphone-fill"></i>{" "} {data.release_date || "No information"}
        <i class="ml-5 text-yellow-500 ri-album-fill"></i>{" "} {data.media_type.toUpperCase()}
      </p>
    </div>
  );
};

export default Header;
