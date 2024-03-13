import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes, Route,useLocation} from 'react-router-dom'

import LoginPage from './components/LoginPage/LoginPage'
import SignUp from './components/SignUp/SignUp'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/Sign-up' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App