import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import NoteActionButton from '../NoteActionButton'

const Note = ({ note, deleteNoteHandler, archiveNoteHandler }) => {
  // handler untuk delete dan archive
  // tidak perlu update karena komponen
  // akan pindah ke NoteList yang berlawanan
  const deleteHandler = () => {
    deleteNoteHandler(note.id)
  }

  const archiveHandler = () => {
    archiveNoteHandler(note.id, note.archived)
  }

  return (
    <article className='flex flex-col border-2 border-slate-700 bg-white rounded-md w-full relative group'>
      <Header id={note.id} createdAt={note.createdAt} title={note.title} />
      <p className='px-3 py-2 break-words'>{note.body}</p>
      <footer className='flex justify-center rounded-md overflow-clip'>
        <NoteActionButton text='Delete' onClick={deleteHandler} color='red' />
        <NoteActionButton
          text={note.archived ? 'Unarchive' : 'Archive'}
          onClick={archiveHandler}
          color={note.archived ? 'green' : 'yellow'}
        />
      </footer>

      {/* dekorasi saat hover */}
      <div className='absolute border-2 border-slate-700 rounded-md top-0 left-0 w-full h-full -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition' />
    </article>
  )
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
}

export default Note
