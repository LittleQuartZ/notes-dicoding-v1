import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Note from './Note'
import Placeholder from './Placeholder'
import {
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/local-data'
import { FiX } from 'react-icons/fi'

const NotesList = ({ archived }) => {
  const [notes, setNotes] = useState(getActiveNotes())
  const [search, setSearch] = useState('')

  const updateData = () => {
    if (archived) {
      setNotes(getArchivedNotes())
    } else {
      setNotes(getActiveNotes())
    }
  }

  useEffect(() => {
    updateData()
  }, [archived])

  // handler untuk delete, lalu update data
  const deleteNoteHandler = id => {
    deleteNote(id)

    updateData()
  }

  // handler untuk archive, lalu update data
  const archiveNoteHandler = (id, archived) => {
    if (archived) {
      unarchiveNote(id)
    } else {
      archiveNote(id)
    }

    updateData()
  }

  return (
    <main className='container mx-auto flex flex-col items-start justify-center px-4 py-2 gap-6 pb-4 md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      <div className='w-full relative xl:col-span-4 lg:col-span-3 md:col-span-2'>
        <input
          className='border-2 border-black rounded-md w-full px-4 pr-11 py-2 focus:outline-none focus:shadow-md relative'
          type='text'
          placeholder='search by title'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-xl'>
            <FiX onClick={() => setSearch('')} />
          </button>
        )}
      </div>
      {/*
        jika panjang array notes lebih dari 0 (1 keatas)
        ubah isi array menjadi komponen Note
        jika tidak, kembalikan komponen placeholder
      */}
      {notes.length > 0 ? (
        !search ? (
          notes.map(note => (
            <Note
              deleteNoteHandler={deleteNoteHandler}
              archiveNoteHandler={archiveNoteHandler}
              key={note.id}
              note={note}
            />
          ))
        ) : (
          notes
            .filter(note =>
              note.title.toLowerCase().includes(search.toLowerCase())
            )
            .map(note => (
              <Note
                deleteNoteHandler={deleteNoteHandler}
                archiveNoteHandler={archiveNoteHandler}
                key={note.id}
                note={note}
              />
            ))
        )
      ) : (
        <Placeholder archived={archived} />
      )}
    </main>
  )
}

NotesList.propTypes = {
  archived: PropTypes.bool,
}

export default NotesList
