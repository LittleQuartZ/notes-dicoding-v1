import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import NotesList from './components/NotesList'
import NoteForm from './components/NoteForm'
import NoteDetail from './components/NoteDetail'
import FloatingButton from './components/FloatingButton'

const App = () => {
  return (
    <div>
      <Navbar />
      <FloatingButton />
      <Routes>
        <Route path='/' element={<NotesList />} />
        <Route path='/archived' element={<NotesList archived />} />
        <Route path='/new' element={<NoteForm />} />
        <Route path='/:id' element={<NoteDetail />} />
      </Routes>
    </div>
  )
}

export default App
