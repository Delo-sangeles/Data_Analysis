import { Navbar } from './components/Navbar'
import { Footer } from './components/footer'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">
        <Dashboard />
      </div>
      <Footer />
    </div>
  )
}

export default App