export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          
          <div className="bg-teal-500/10 border border-teal-400/30 rounded-xl p-3 shadow-md shadow-teal-500/20 backdrop-blur-md">
            <span className="text-xl text-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]">
              ⚡
            </span>
          </div>

          <div>
            <p className="text-white font-semibold tracking-tight text-xl leading-none">
              DataInsight
            </p>
            <p className="text-teal-400 text-xs tracking-[0.2em] uppercase">
              Analytics
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          
          <a href="#" className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-teal-500/20 transition-all duration-300">
            Dashboard
          </a>

          <a href="#" className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-teal-500/20 transition-all duration-300">
            Reports
          </a>

          <a href="#" className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-teal-500/20 transition-all duration-300">
            Maps
          </a>

          <a href="#" className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-teal-500/20 transition-all duration-300">
            Settings
          </a>

        </div>

        {/* Badge fecha */}
        <div className="flex items-center gap-4">
          
          <span className="text-xs text-gray-400 border border-white/10 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
            📅 Abril 2026
          </span>

          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
            <span className="text-teal-400 text-xs font-medium tracking-wide">
              En vivo
            </span>
          </div>

        </div>

      </div>
    </nav>
  )
}