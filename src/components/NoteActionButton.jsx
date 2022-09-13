import PropTypes from 'prop-types'

const NoteActionButton = ({ onClick, text, color, className }) => {
  let colors

  switch (color) {
    case 'red':
      colors = 'bg-red-200 hover:bg-red-300 text-red-600 '
      break
    case 'yellow':
      colors = 'bg-yellow-200 hover:bg-yellow-300 text-yellow-600 '
      break
    case 'green':
      colors = 'bg-green-200 hover:bg-green-300 text-green-600 '
      break
  }

  return (
    <button
      onClick={onClick}
      className={`w-full py-2 font-medium transition ${colors} ${className}`}>
      {text}
    </button>
  )
}

NoteActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
}

export default NoteActionButton
