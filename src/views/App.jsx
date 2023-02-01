

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
function App() {
  

  return (
    <Routes>
      <Route path='/home/*' element={<Home />} />
      <Route path={``} element={<Navigate replace to='home' />} />
      
    </Routes>
  )
}

export default App
