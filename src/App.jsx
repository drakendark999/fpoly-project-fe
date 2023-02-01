

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './themes/home';

function App() {
  

  return (
    <Routes>
      <Route path='/home/*' element={<Home />} />
      

      {/* <Route path={``} element={<Navigate replace to='demo' />} /> */}
      
    </Routes>
  )
}

export default App
