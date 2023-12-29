import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function TwoColCard({
  pinned = false,
  main = "Untitled",
  label,
  image = "https://res.cloudinary.com/djygck7yw/image/upload/v1703704381/Sweets%20Music/s6quzb6ctpqd8n2k4khe.gif",
  altText,
  rounded = false,
  hover = true,
  hideDetails = false,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div
      className={`flex gap-3 p-2 rounded-lg ${
        hover ? "dark:hover:bg-zinc-800 hover:bg-zinc-300 cursor-pointer" : ""
      }`}
    >
      <div className="flex-none">
        <img
          src={image}
          alt={altText ? altText : main}
          className={`object-cover w-14 h-14 flex-none ${
            rounded ? "rounded-full" : "rounded-lg"
          }`}
        />
      </div>
      <div
        className={`leading-tight overflow-x-hidden flex justify-center flex-col ${
          (isMobile && hideDetails) ? "hidden" : ""
        }`}
      >
        <div className="flex">
          <p className="font-bold text-ellipsis line-clamp-1">{main}</p>
        </div>
        <div>
          <div className="flex gap-2">
            {pinned ? (
              <button>
                <i className="fa-solid fa-thumbtack text-green-600 rotate-45" />
              </button>
            ) : (
              ""
            )}
            <p className="text-zinc-800 dark:text-zinc-400 text-sm text-ellipsis line-clamp-1">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColCard;

TwoColCard.propTypes = {
  main: PropTypes.string.isRequired,
  label: PropTypes.string,
  pinned: PropTypes.bool,
  rounded: PropTypes.bool,
  hover: PropTypes.bool,
  image: PropTypes.string,
  altText: PropTypes.string,
  hideDetails: PropTypes.bool,
};
