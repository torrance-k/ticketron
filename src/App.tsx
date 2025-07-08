import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import IssueListPage from './pages/IssueListPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/issues' element={<IssueListPage projectId={''} /> } />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
