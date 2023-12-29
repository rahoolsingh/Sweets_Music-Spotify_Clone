import { useEffect, useState } from "react";
import FeedCard from "../../Cards/FeedCard";

function FeedsPanel() {
  const [feeds, setFeeds] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    setName(getUA())
    setFeeds([
      {
        main: "Arijit Singh Hits",
        image:
          "https://img.etimg.com/thumb/width-640,height-480,imgsize-47012,resizemode-75,msid-100076153/magazines/panache/should-i-leave-video-of-arijit-singh-gently-schooling-eager-fan-goes-viral-on-the-internet/arijit-singh-2.jpg",
      },
      {
        main: "Honey Singh",
        image:
          "https://images.news18.com/ibnlive/uploads/2022/12/honey-singh-1.jpg",
        subText: "All hit songs of Honey Singh",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
      {
        main: "Arijit Singh Hits",
      },
    ]);
  });
  const getUA = () => {
    let device = "Unknown";
    const ua = {
      "Generic Linux": /Linux/i,
      Android: /Android/i,
      BlackBerry: /BlackBerry/i,
      Bluebird: /EF500/i,
      "Chrome OS": /CrOS/i,
      Datalogic: /DL-AXIS/i,
      Honeywell: /CT50/i,
      iPad: /iPad/i,
      iPhone: /iPhone/i,
      iPod: /iPod/i,
      macOS: /Macintosh/i,
      Windows: /IEMobile|Windows/i,
      Zebra: /TC70|TC55/i,
    };
    Object.keys(ua).map(
      (v) => navigator.userAgent.match(ua[v]) && (device = v)
    );
    return device;
  };

  return (
    <div className="lg:w-9/12 md:w-2/3 w-full bg-zinc-100 dark:bg-zinc-900 mb-2 rounded-lg flex flex-col">
    <div className="px-10 pb-4 lg:pt-8 md:pt-8 p-5 shadow-2xl">
      <p className="text-3xl font-semibold">Good Morning</p>
      <p>{name} User</p>
    </div>
      {/* Recommended Feed */}
      <div className="w-full overflow-y-auto overflow-x-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700">
      <p className="py-5 text-xl font-bold mx-8 hover:underline w-fit">For You</p>
        <div className="mx-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-8 m-auto lg:mb-10 md:mb-10 mb-[200px]">
          {feeds.map((feed, index) => (
            <div className="block" key={index}>
              <FeedCard {...feed} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedsPanel;
