import { Route, Routes } from "react-router-dom"

import './global.css'
import LayoutComponent from './layout/layout'
import Dashboard from './pages/dashboard/dashboard'
import Teachers from './pages/teachers/teachers'
import Students from './pages/students/students'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index path='/' element={<Dashboard />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/students' element={<Students />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
