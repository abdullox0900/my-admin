import { Route, Routes } from "react-router-dom"

import './global.css'
import LayoutComponent from './layout/layout'
import Dashboard from './pages/dashboard/dashboard'
import Students from './pages/students/students'
import Teachers from './pages/teachers/teachers'
import StudentPage from './pages/students/studetn-page/student-page'
import TeacherPage from './pages/teachers/teacher_inner/teacher_inner'

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index path='/' element={<Dashboard />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/teacher_page/:teacherId' element={<TeacherPage />} />
          <Route path='/students' element={<Students />} />
          <Route path='/student_page/:id' element={<StudentPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
