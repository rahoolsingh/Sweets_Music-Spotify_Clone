import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const MusicControl = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const updateDuration = () => {
    setAudioDuration(audioRef.current.duration);
  };

  useEffect(() => {
    let audio = audioRef.current;
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  });

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedHours = hours > 0 ? `${hours}:` : "";
    const formattedMinutes = `${
      minutes < 10 && hours > 0 ? "0" : ""
    }${minutes}:`;
    const formattedSeconds = seconds < 10 ? "0" : "";

    return `${formattedHours}${formattedMinutes}${formattedSeconds}${seconds}`;
  };

  const onSeek = (e) => {
    setCurrentTime(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  return (
    <div className="p-2">
      <div className="flex flex-col justify-center items-center">
        {/* Music Controls - Play/Pause/Forward/Backward/Shuffle/Repeat */}
        <div className="flex gap-8 justify-center items-center text-2xl">
          <button className="fa-solid fa-shuffle text-sm text-green-500"></button>
          {/* Music Control */}
          <div className="flex gap-4">
            <button className="text-xl hover:text-lg w-8 h-8 text-zinc-400">
              <i className="fa-solid fa-backward-step"></i>
            </button>
            <button
              className="control-button text-base text-black bg-white rounded-full w-8 h-8 flex justify-center items-center hover:text-sm"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
              )}
            </button>
            <button className="text-xl hover:text-lg w-8 h-8 text-zinc-400">
              <i className="fa-solid fa-forward-step"></i>
            </button>
          </div>
          <button className="fa-solid fa-repeat text-sm text-green-500"></button>
        </div>

        <div className="time-info flex gap-3 justify-between items-center w-full mt-1 text-xs">
          <span className="flex-none">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={currentTime}
            max={audioDuration || 0}
            onChange={onSeek}
            className="w-full h-1 rounded-full accent-white hover:accent-green-500 my-3"
          />
          <span className="flex-none">{formatTime(audioDuration)}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicControl;

MusicControl.propTypes = {
  src: PropTypes.string,
  audioRef: PropTypes.object,
};
