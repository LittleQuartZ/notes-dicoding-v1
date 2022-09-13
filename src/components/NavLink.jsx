import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  const { pathname } = useLocation()

  const isActive = to === pathname

  return (
    <Link
      to={to}
      className={`px-3 py-1 rounded-md select-none relative group ${
        isActive ? 'bg-slate-700 text-white' : 'ring-slate-700 ring-2 bg-white'
      }`}>
      {children}
      <div
        className={`w-full h-full absolute -z-10 left-0 top-0 rounded-md opacity-25 transition translate-x-1 -translate-y-1 group-active:translate-x-0 group-active:translate-y-0 ${
          isActive ? 'bg-slate-700' : 'ring-black ring-2'
        }`}
      />
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]),
}

export default NavLink
