import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import ChatPage from './pages/chat/ChatPage'
import UploadPage from './pages/upload/UploadPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/chat" element={<ChatPage />} />
        <Route exact path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  )  
}

export default App
