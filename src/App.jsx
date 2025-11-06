import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import GameBoard from './pages/GameBoard'

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/game" element={<GameBoard/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
