import { useRef } from "react";
import MultiControl from "./MultiControl";
import PlayControl from "./MusicControl";
import TwoColCard from "./TwoColCard";

function Player() {
  const src = "https://res.cloudinary.com/djygck7yw/video/upload/v1703837397/Sweets%20Music/Musics/dxpsl9qhwqswgrsurk56.mp3"
  const audioRef = useRef()
  return (
    <div className="flex gap-2 justify-between">
      <div className="w-3/12 flex items-center justify-center">
          <TwoColCard
            main={
              "BEBO | Alfaaz Feat. Yo Yo Honey Singh | Brand New Punjabi Songs 2013"
            }
            label={"Alfaaz | Yo Yo Honey Singh | 2023"}
            hover={false}
            hideDetails={true}
          />
          <button className="text-green-500">
            <i className={`fa-regular fa-heart`}></i>
          </button>
      </div>

      {/* Audio Reference */}
      <audio ref={audioRef} src={src} />
      <div className="w-5/12 overflow-hidden text-ellipsis whitespace-nowrap">
        <PlayControl audioRef={audioRef}/>
      </div>
      <div className="w-3/12 flex justify-end items-center">
        <MultiControl audioRef={audioRef}/>
      </div>
    </div>
  );
}

export default Player;
