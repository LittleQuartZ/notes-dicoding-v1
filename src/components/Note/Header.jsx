import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const Header = ({ title, id, createdAt, className }) => {
  return (
    <header
      className={`px-3 py-2 border-b-2 border-slate-300 relative ${className}`}>
      <h2 className='text-lg font-bold'>{title}</h2>
      <p className='text-sm text-slate-500'>
        {new Date(createdAt).toLocaleString()}
      </p>

      {/* Link menuju NoteDetail menggunakan props id */}
      <Link
        to={`/${id}`}
        className='absolute top-1/2 right-4 -translate-y-1/2 p-2'>
        <FiArrowRight className='text-lg' />
      </Link>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,

  // props untuk tambahan class dari parent
  className: PropTypes.string,
}

export default Header
