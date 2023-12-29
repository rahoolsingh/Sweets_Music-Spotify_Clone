import PropTypes from "prop-types";

function ActionLabel({
  icon,
  label,
  type = "solid",
  primaryActionIcon,
  primaryActionLabel,
  secondaryActionIcon,
}) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <span className="">
          <i className={`fa-${type} fa-${icon}`}></i>
        </span>
        <span>{label}</span>
      </div>

      <div className="flex gap-3">
        <span>
            <i className={`fa-solid fa-${primaryActionIcon}`}></i>
            <span>{primaryActionLabel}</span>
        </span>
        <span>
            <i className={`fa-solid fa-${secondaryActionIcon}`}></i>
        </span>
      </div>
    </div>
  );
}

export default ActionLabel;

ActionLabel.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  primaryActionIcon: PropTypes.string,
  primaryActionLabel: PropTypes.string,
  secondaryActionIcon: PropTypes.string,
  type: PropTypes.number,
};
