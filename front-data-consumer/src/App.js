import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
          {/* <Route path='/app/*' element={<Applayout />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;