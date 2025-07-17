import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout/layout'
import Home from './pages/Muhammad/Home'
import Card from './pages/Muhammad/Card'
import Cotalog from './pages/Aliakbar/Cotalog'
import Info from './pages/Aliakbar/Info'
import Contact from './pages/Umar/Contact'
import Count from './pages/Umar/Count'
import Paymate from './pages/Umar/Paymate'
import About from './pages/Yoqub/About'
import Sand from './pages/Yoqub/Sand'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/card',
          element:<Card/>
        },
        {
          path:'/info/:id',
          element:<Info/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/count',
          element:<Count/>
        },
        {
          path:'/paymate',
          element:<Paymate/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/sand',
          element:<Sand/>
        },
        {
          path:'/cotalog',
          element:<Cotalog/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App