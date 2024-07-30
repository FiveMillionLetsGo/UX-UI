import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
import Setting from './components/Setting';

function App() {
  return (
    <Router>
      <dev className='app'>
        <dev className='app__header'>
          <p><Link to='/' className='link'>500만원조</Link></p>
          {/* <p><Link to='/' className='link'>Main</Link></p>
          <p><Link to='/Menu' className='link'>Menu</Link></p>
          <p><Link to='/Setting' className='link'>Setting</Link></p> */}
        </dev>
        <dev className='app__body'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/Setting' element={<Setting />} />
          </Routes>
        </dev>
      </dev>
    </Router>
  );
}

export default App;