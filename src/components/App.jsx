
import NavBar from './NavBar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Team from './Team'
import Article from './Article'
import { FadeLoader } from 'react-spinners';
const TeamsDetails = React.lazy(() => import('./TeamsDetails'));
const Player = React.lazy(() => import('./Player'));
const Home = React.lazy(() => import('./Home'));
const Players = React.lazy(() => import('./Players'));
const Teams = React.lazy(()=>import('./Teams'))
const Articles = React.lazy(()=>import('./Articles'))


const App = () => {
  return (
    <main>
      <NavBar />

      <React.Suspense fallback={<FadeLoader color='#ffffff'/>}>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/players' element={<Players />}>
          <Route path=':playerId' element={<Player />} />
            <Route path='' element={<section className='container py-16 text-center'>Choose a player..</section>}></Route>
        </Route>
        <Route path='/teams' element={<Teams />} >
          <Route path=':teamId' element={<Team />} />
          <Route path='' element={<section className='container py-16 text-center'>Choose a team..</section>}></Route>
        </Route>
        <Route path='/:teamId' element={<TeamsDetails />} />
        <Route path='/:teamId/articles' element={<Articles />}>
          <Route path=':articleId' element={<Article />}></Route>
          <Route path='' element={<section className='container py-16 text-center'>Choose an article..</section>}></Route>
        </Route>
      </Routes>
      </React.Suspense>
      
    </main>
  )
}

export default App
