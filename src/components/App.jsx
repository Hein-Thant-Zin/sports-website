
import NavBar from './navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import TeamsDetails from './TeamsDetails'

const App = () => {
  return (
    <main>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/players' element={<Players/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/:teamId' element={<TeamsDetails/>} />
      </Routes>
      
    </main>
  )
}

export default App
