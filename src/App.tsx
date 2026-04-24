import Dashboard from './pages/Dashboard'

import { Footer } from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <Dashboard />
        <Footer />
      </div>
    </div>
  )
}

export default App