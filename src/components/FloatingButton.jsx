import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

const FloatingButton = () => {
  return (
    <Link
      to='/new'
      className='fixed bottom-4 right-4 z-10 p-4 bg-blue-300 rounded-md opacity-75 hover:opacity-100 transition hover:shadow-lg focus:shadow-lg active:shadow-none '>
      <FiPlus />
    </Link>
  )
}

export default FloatingButton
