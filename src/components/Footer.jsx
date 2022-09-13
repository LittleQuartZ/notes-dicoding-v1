import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='w-full justify-center items-center flex gap-2 py-4 sticky bottom-0 -z-20'>
      made with <FiHeart className='text-pink-500' /> by{' '}
      <a
        className='underline'
        href='https://github.com/littlequartz'
        target='_blank'>
        LittleQuartZ
      </a>
    </footer>
  )
}

export default Footer
