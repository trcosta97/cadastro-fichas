import React from 'react'
import ReactDOM from 'react-dom/client'
import CadastroFicha from './routes/CadastroFicha.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import Login from './routes/Login.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cadastroFicha",
    element: <CadastroFicha />,
    errorElement: <ErrorPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
