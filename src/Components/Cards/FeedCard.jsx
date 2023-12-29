import PropTypes from "prop-types";

function FeedCard({
  handleClick,
  main,
  subText,
  image = "https://res.cloudinary.com/djygck7yw/image/upload/v1703704381/Sweets%20Music/s6quzb6ctpqd8n2k4khe.gif",
}) {
  return (
    <button
      className="w-fit bg-zinc-800 h-fit p-4 pb-0 rounded-xl text-left hover:bg-gradient-to-tl hover:from-[#313131] hover:via-zinc-700 hover:to-zinc-800"
      onClick={handleClick}
    >
      <div className="relative lg:w-36 lg:h-36 md:w-32 md:h-32 w-28 h-28 shadow-2xl">
        <img
          src={image}
          alt={main}
          className="lg:w-36 lg:h-36 md:w-32 md:h-32 w-28 h-28 object-cover rounded-lg"
        />
        <button className="absolute shadow-xl bottom-2 right-2 text-base text-black bg-green-500 rounded-full w-8 h-8 flex justify-center items-center hover:text-sm">
          <i className="fas fa-play"></i>
        </button>
      </div>
      <div className="lg:w-36 md:w-32 w-28 h-24 py-2 flex flex-col gap-1">
        <p className="font-semibold">{main}</p>
        <p className="text-sm line-clamp-2">{subText}</p>
      </div>
    </button>
  );
}

export default FeedCard;

FeedCard.propTypes = {
  handleClick: PropTypes.func,
  main: PropTypes.string,
  subText: PropTypes.string,
  image: PropTypes.string,
};
