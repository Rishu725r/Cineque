import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";

const Home = () => {
  document.title = "Cineque | Homepage";
  const [wallpaper, setwallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-screen overflow-y-scroll overflow-x-hidden ml-23">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
