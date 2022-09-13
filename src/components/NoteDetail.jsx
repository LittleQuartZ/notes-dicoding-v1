import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiTrash, FiArchive, FiCheck } from 'react-icons/fi'

import NoteActionButton from './NoteActionButton'
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
  editNote,
} from '../utils/local-data'

const NoteDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // state menggunakan nilai awal getNote(id)
  // berasumsi id tidak akan berubah di NoteDetail
  const [note, setNote] = useState(getNote(id))

  // handler untuk action button dengan parameter type
  const actionHandler = type => {
    switch (type) {
      case 'archive':
        if (note.archived) {
          unarchiveNote(note.id)
        } else {
          archiveNote(note.id)
        }

        setNote(getNote(id))
        break
      case 'delete':
        deleteNote(note.id)
        navigate(-1)
        alert(`Note with id: ${note.id} has been deleted`)
        break
    }
  }

  // function untuk mengembalikan props
  // yang dibutuhkan agar element dapat diedit saat diklik
  const getEditableProps = key => ({
    onClickCapture: e => {
      e.target.contentEditable = true
    },
    onBlur: e => {
      if (key === 'title' && e.target.innerText.length > 28) {
        alert('Title length cannot exceed 28 characters')
        e.target.innerText = note.title
        return
      }
      editNote({
        ...note,
        [key]: e.target.innerText,
      })
      e.target.contentEditable = false
    },
  })

  return (
    <main className='mx-auto container'>
      <header className='flex justify-between px-4 py-2'>
        <section>
          <p {...getEditableProps('title')} className='text-lg font-bold'>
            {note.title}
          </p>
          <p className='text-sm text-slate-500'>
            {new Date(note.createdAt).toLocaleString()}
          </p>
        </section>
        <section className='flex items-center gap-4'>
          <NoteActionButton
            className='rounded-md px-4'
            text={<FiTrash />}
            color='red'
            onClick={() => actionHandler('delete')}
          />
          <NoteActionButton
            className='rounded-md px-4 py-2'
            text={note.archived ? <FiCheck /> : <FiArchive />}
            color={note.archived ? 'green' : 'yellow'}
            onClick={() => actionHandler('archive')}
          />
        </section>
      </header>
      <div className='px-4 py-3 break-words' {...getEditableProps('body')}>
        {note.body}
      </div>
    </main>
  )
}

export default NoteDetail
