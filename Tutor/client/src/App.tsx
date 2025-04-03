import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'
import StudyPlan from './pages/StudyPlan'
import Layout from './components/Layout'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/study-plan" element={<StudyPlan />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  )
}

export default App
