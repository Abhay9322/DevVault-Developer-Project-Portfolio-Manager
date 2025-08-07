import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CreateProject />}></Route>
      </Routes>
    </Router>
  )
}

export default App
