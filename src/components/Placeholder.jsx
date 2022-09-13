import React from 'react'
import PropTypes from 'prop-types'

const Placeholder = ({ archived }) => {
  return (
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-6'>
      <p className='text-4xl'>🙁</p>
      <h2 className='text-3xl font-bold'>
        Not found any {archived && 'archived'} notes.
      </h2>
      {archived || <p>Add new note by clicking the bottom right button!</p>}
    </div>
  )
}

Placeholder.propTypes = {
  archived: PropTypes.bool,
}

export default Placeholder
