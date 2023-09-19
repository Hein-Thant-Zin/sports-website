
import NavBar from './NavBar'
import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Team from './Team'
import Article from './Article'
import { FadeLoader } from 'react-spinners';
const TeamsDetails = React.lazy(() => import('./TeamsDetails'));
const Player = React.lazy(() => import('./Player'));
const Home = React.lazy(() => import('./Home'));
const Players = React.lazy(() => import('./Players'));
const Teams = React.lazy(() => import('./Teams'));
const Articles = React.lazy(() => import('./Articles'));

function Routers() {
  return useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/players', element: <Players />,
      children: [
        {
        path : ':playerId',
        element : <Player />
        }, {
        path: '',
        element : <section className='container py-16 text-center'>Choose a player..</section>
        },
      ],
    },
    {
      path: '/teams', element: <Teams />,
      children: [
        {
        path: ':teamId',
        element: <Team />
        }, {
        path: '',
        element : <section className='container py-16 text-center'>Choose a team..</section>
      }
      ],
    },
    {
      path: '/:teamId',
      element : <TeamsDetails />
    },
    {
      path: '/:teamId/articles',
      element: <Articles />,
      children: [
        {
        path: ':teamId',
        element : <Team />
        }, {
        path: '',
        element : <section className='container py-16 text-center'>Choose an article..</section>
      }
      ],
    },
  ])
}



const App = () => {
  return (
    <main>
      <NavBar />

      <React.Suspense fallback={<FadeLoader color='#ffffff'/>}>
        <Routers />
      </React.Suspense>
      
    </main>
  )
}

export default App
