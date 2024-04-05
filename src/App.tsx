import { Route, Routes } from "react-router-dom"

import './global.css'
import LayoutComponent from './layout/layout'
import Dashboard from './pages/dashboard/dashboard'
import Teachers from './pages/teachers/teachers'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index path='/' element={<Dashboard />} />
          <Route path='/teachers' element={<Teachers />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
