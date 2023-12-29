import { useState } from "react";
import SideBar from "./Components/Panels/SideBar/SideBar";
import FeedsPanel from "./Components/Panels/FeedsPanel/FeedsPanel";
import PlayerPanel from "./Components/Panels/PlayerPanel/PlayerPanel";

function App() {
  const [filters, setFilters] = useState([
    "Playlists",
    "Artists",
    "Albums",
  ]);

  const [yourLibraries, setYourLibraries] = useState([
    {
      main: "Honey Singh Era Playlist 200 Songs",
      label: "Playlist",
    },
    {
      main: "Akshay Kumar Hits",
      label: "Playlist",
      pinned: true,
    },
    {
      main: "Devotional",
      label: "Playlist",
      pinned: true,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Meerabai_%28crop%29.jpg/220px-Meerabai_%28crop%29.jpg",
    },
    {
      main: "Yo Yo Honey Singh",
      label: "Artist",
      image:
        "http://t3.gstatic.com/images?q=tbn:ANd9GcQLbjjM6To9wdfPKrlCKG-fP1DG35hCLQLWg189cneoMGypAoymmszMhG0VPKjzLgMTmenZrA",
      rounded: true,
    },
    {
      main: "Himesh",
      label: "Artist",
      rounded: true,
    },
    {
      main: 'Delhi 6',
      label: 'Album',
    },
    {
      main: 'Yo Yo Honey Singh',
      label: 'Artist',
      image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQLbjjM6To9wdfPKrlCKG-fP1DG35hCLQLWg189cneoMGypAoymmszMhG0VPKjzLgMTmenZrA',
      rounded: true
    },
    {
      main: 'Yo Yo Honey Singh',
      label: 'Artist',
      image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQLbjjM6To9wdfPKrlCKG-fP1DG35hCLQLWg189cneoMGypAoymmszMhG0VPKjzLgMTmenZrA',
      rounded: true
    },
  ]);

  return (
    <div className="m-auto flex flex-col lg:p-2 md:p-2 w-full h-screen overflow-hidden bg-zinc-300 dark:bg-black dark:text-white">
      {/* Top Part */}
      <div className="flex overflow-y-hidden gap-2">
        <SideBar filters={filters} yourLibraries={yourLibraries}/>
        <FeedsPanel/>
      </div>

      {/* Player Part */}
      <div className="w-full lg:relative md:relative fixed bottom-1 z-2 bg-black p-2 lg:p-0 md:p-0">
        <PlayerPanel />
      </div>
    </div>
  );
}

export default App;
