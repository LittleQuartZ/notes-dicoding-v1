import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import NavLink from './NavLink'

const Navbar = () => {
  // state untuk mengetahui page ter-scroll atau tidak
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // (un)subscribe scroll event pada (un)mount
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setScrolled(scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setScrolled])

  return (
    <nav
      className={`sticky top-0 z-10 px-4 py-4 flex justify-end items-center gap-4 transition ${
        scrolled && 'bg-white border-b-2 border-black'
      }`}>
      {location.pathname === '/' || location.pathname === '/archived' ? (
        <h1 className='text-slate-700 text-2xl font-bold mr-auto'>Notes</h1>
      ) : (
        <Link to={-1} className='mr-auto text-2xl'>
          <FiArrowLeft />
        </Link>
      )}
      <NavLink to='/' children='Home' />
      <NavLink to='/archived' children='Archived' />
    </nav>
  )
}

export default Navbar
