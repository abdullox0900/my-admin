import { Route, Routes } from "react-router-dom"

import './global.css'
import LayoutComponent from './layout/layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route />
        </Route>
      </Routes>
    </>
  )
}

export default App
