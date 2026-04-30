export function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-2">
            <span className="text-xl"></span>
          </div>
          <div>
            <p className="text-white font-bold tracking-tight text-lg leading-none">DataInsight</p>
            <p className="text-teal-400 text-xs tracking-widest uppercase">Analytics</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1">
          <a href="#" className="text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
          
          </a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
            
          </a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
            
          </a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
            
          </a>
        </div>

        {/* Badge fecha */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 border border-gray-700 px-3 py-1.5 rounded-full">
            📅 Abril 2026
          </span>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-teal-400 text-xs font-medium">En vivo</span>
        </div>

      </div>
    </nav>
  )
}