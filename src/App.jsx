import { Outlet } from 'react-router-dom'
import Side from './components/Nav/Side.jsx'

function App() {

  return (
    <>
     <Side />
     <Outlet />
    </>
  )
}

export default App
