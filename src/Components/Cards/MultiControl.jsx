import PropTypes from 'prop-types'
import { useEffect, useState } from "react";

function MultiControl({ audioRef }) {
  const [volume, setVolume] = useState(1);
  const [volumeIcon, setVolumeIcon] = useState("high");

  useEffect(() => {
      if (audioRef) {
      let audio = audioRef.current;
      audio.addEventListener("volumechange", updateVolume);
      return () => {
        audio.removeEventListener("volumechange", updateVolume);
      };
    }
  });

  const updateVolume = () => {
    let volume = audioRef.current.volume;
    setVolume(volume);
    if (volume === 0) {
      setVolumeIcon("xmark");
    } else if (volume < 0.2) {
      setVolumeIcon("off");
    } else if (volume <= 0.5) {
      setVolumeIcon("low");
    } else {
      setVolumeIcon("high");
    }
  };
  const volumeSeek = (e) => {
    setVolume(e.target.value / 100);
    audioRef.current.volume = e.target.value / 100;
  };
  const toggleMute = () => {
    if (volume === 0) {
      volumeSeek({ target: { value: 20 } });
    } else {
      volumeSeek({ target: { value: 0 } });
    }
  };
  return (
    <div className="flex justify-center items-center p-2 gap-3 font-thin">
      <div className="flex justify-center items-center gap-2">
        <button onClick={toggleMute}>
          <i className={`fa-solid fa-volume-${volumeIcon} cursor-pointer`}></i>
        </button>
        <input
          type="range"
          value={volume * 100}
          max={100}
          onChange={volumeSeek}
          className="w-full h-1 rounded-full accent-white hover:accent-green-500"
        />
      </div>
      <i className="fa-solid fa-clone rotate-180 hover:text-green-500"></i>
    </div>
  );
}

export default MultiControl;

MultiControl.propTypes = {
    audioRef: PropTypes.object
}
