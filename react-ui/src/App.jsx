/*eslint-disable*/
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Create from './pages/Create';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <div>
      <nav>
        <Link to={"/"} className='nav-link'>Home</Link>
         <Link to={"/add-user"} className='nav-link'>Create</Link>
         </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<Error />}/>
          <Route path='/add-user' element={<Create />}/>
          <Route path='/edit/:id' element={<Edit />}/>
          <Route path='/view/:id' element={<View />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;


