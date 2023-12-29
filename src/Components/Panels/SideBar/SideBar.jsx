import PropTypes from "prop-types";
import PillBtn from "../../Buttons/PillBtn";
import TwoColCard from "../../Cards/TwoColCard";
import ActionLabel from "../../Labels/ActionLabel";

function SideBar({ filters, yourLibraries }) {
  return (
    <div className="lg:w-3/12 md:w-1/3 w-full flex flex-col justify-between">
      <div className="leading-10 py-3 px-8 text-lg bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <ActionLabel label={"Home"} icon={"home"} />
        <ActionLabel label={"Search"} icon={"search"} />
      </div>

      <div className="leading-10 pt-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg my-2 flex flex-col overflow-hidden">
        <div className="px-8 shadow-2xl pb-1">
          <div className="font-bold dark:text-zinc-300 ">
            <ActionLabel
              label={"Your Libraries"}
              icon={"music"}
              primaryActionIcon={"add"}
              secondaryActionIcon={"arrow-right"}
            />
          </div>
          <div className="flex gap-2 py-2 overflow-hidden">
            {filters.map((filter, index) => (
              <PillBtn key={filter + index} label={filter} />
            ))}
          </div>
        </div>

        <div className="overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700">
          <div className="py-2 text-sm px-8">
            <ActionLabel
              icon="search"
              primaryActionLabel={"Recents"}
              secondaryActionIcon={"bars"}
            />
          </div>
          {yourLibraries
            .sort((sorted) => (sorted.pinned ? -1 : 1))
            .map((album, index) => (
              <div key={index} className="my-1 px-6">
                <TwoColCard {...album} hover={true} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

SideBar.propTypes = {
  filters: PropTypes.array.isRequired,
  yourLibraries: PropTypes.array.isRequired,
};
