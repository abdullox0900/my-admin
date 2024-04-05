import { Route, Routes } from "react-router-dom"

import './global.css'
import LayoutComponent from './layout/layout'
import Dashboard from './pages/dashboard/dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index path='/' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
