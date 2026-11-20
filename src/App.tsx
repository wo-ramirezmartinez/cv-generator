import { Navigate, Route, Routes } from 'react-router'
import CvDetailPage from './pages/CvDetailPage'
import CvListPage from './pages/CvListPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CvListPage />} />
      <Route path="/cv/:id" element={<CvDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
