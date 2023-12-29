import { useRef } from "react";
import TwoColCard from "../../Cards/TwoColCard";
import MusicControl from "../../Cards/MusicControl";
import MultiControl from "../../Cards/MultiControl";



function PlayerPanel() {
  const src = "https://res.cloudinary.com/djygck7yw/video/upload/v1703837397/Sweets%20Music/Musics/dxpsl9qhwqswgrsurk56.mp3"
  const audioRef = useRef()
  return (
    <div className="flex gap-2 justify-between">
      <div className="lg:w-3/12 lg:flex items-center justify-center hidden">
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
      <div className="lg:w-5/12 md:w-5/12 w-full overflow-hidden text-ellipsis whitespace-nowrap">
          <div className="text-center block lg:hidden md:hidden">
          <marquee className="w-9/12 overflow-hidden">BEBO | Alfaaz Feat. Yo Yo Honey Singh | Brand New Punjabi Songs 2013</marquee>
          </div>
        <MusicControl audioRef={audioRef}/>
      </div>
      <div className="w-3/12 lg:flex md:flex justify-end items-center hidden">
        <MultiControl audioRef={audioRef}/>
      </div>
    </div>
  );
}

export default PlayerPanel;
