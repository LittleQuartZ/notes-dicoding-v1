import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../utils/local-data'

// className untuk input
const inputClassName = 'ring-2 ring-gray-500 rounded-md px-3 py-2'

function NoteForm() {
  // state untuk controlled components
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // autofocus ke input title
  // saat mount
  const titleInputRef = useRef(null)

  useEffect(() => {
    titleInputRef.current.focus()
  }, [titleInputRef])

  const navigate = useNavigate()

  const addHandler = () => {
    if (title.length === 0 || body.length === 0) {
      alert('Title or Body cannot be empty')
    } else if (title.length > 28) {
      alert('Title length cannot exceed 28 characters')
    } else {
      addNote({ title, body })
      navigate('/')
    }
  }

  return (
    <form
      className='flex flex-col px-4 gap-4'
      onSubmit={e => {
        e.preventDefault()
        addHandler()
      }}>
      <input
        ref={titleInputRef}
        type='text'
        className={inputClassName}
        value={title}
        placeholder='title of note'
        onChange={e => setTitle(e.target.value)}
        required
        maxLength={28}
      />
      <textarea
        className={`${inputClassName} min-h-[180px]`}
        value={body}
        placeholder='content/body of note'
        onChange={e => setBody(e.target.value)}
        required
      />
      <button
        type='submit'
        className='w-full bg-green-200 hover:bg-green-300 hover:shadow text-green-700 px-5 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'>
        Add
      </button>
    </form>
  )
}

export default NoteForm
