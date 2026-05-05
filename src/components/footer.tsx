export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-700/50 py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo y nombre */}
        <div className="flex items-center gap-3">
          <span className="text-2xl"></span>
          <div>
            <p className="text-white font-bold tracking-tight">DataInsight Analytics</p>
            <p className="text-gray-500 text-xs">Análisis del mercado turístico global</p>
          </div>
        </div>

        {/* Centro */}
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            Datos basados en el mercado Airbnb · Sydney · New York · Madrid · London · Milan · Tokyo
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Actualizado · 2026
          </p>
        </div>

        {/* Derecha */}
        <div className="text-right">
          <p className="text-gray-500 text-xs">Desarrollado por</p>
          <p className="text-teal-400 text-sm font-semibold">DataInsight Team</p>
        </div>

      </div>
    </footer>
  )
}