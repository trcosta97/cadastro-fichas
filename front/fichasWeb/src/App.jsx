import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import LinkButton from './components/linkButton'
import Login from './routes/Login'
 
function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
