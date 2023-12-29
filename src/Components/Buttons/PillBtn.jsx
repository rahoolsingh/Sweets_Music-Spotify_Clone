import PropTypes from 'prop-types'

function PillBtn({label}) {
  return (
    <span className="font-semibold py-1 px-3 rounded-3xl text-xs whitespace-nowrap dark:bg-zinc-700 dark:text-white">
    {label}
    </span>
  )
}

export default PillBtn

PillBtn.propTypes = {
    label: PropTypes.string
}