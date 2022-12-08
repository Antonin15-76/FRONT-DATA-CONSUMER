import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'
import Log from './pages/app/logger'
import LogIn from './pages/app/logger/LogIn'
import Applayout from './Components/menu/Applayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Log />} />
        <Route path='/loginForm' element={<LogIn />} />
        <Route path='/app/*' element={<Applayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
