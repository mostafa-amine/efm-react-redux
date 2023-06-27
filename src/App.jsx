import { useState } from 'react'
import AjouterNote from './Composont/AjouterNote'
import Bulletin from './Composont/Bulletin'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='ajouter' element={<AjouterNote></AjouterNote>} />
          <Route path='bulletin' element={<Bulletin></Bulletin>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
