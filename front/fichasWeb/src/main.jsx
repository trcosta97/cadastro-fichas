import React from 'react'
import ReactDOM from 'react-dom/client'
import CadastroFicha from './routes/CadastroFicha.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import Login from './routes/Login.jsx'
import App from './App.jsx'
import ListaFichas from './routes/ListaFichas.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cadastroFicha",
    element: <CadastroFicha />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/lista",
    element: <ListaFichas/>,
    errorElement: <ErrorPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
