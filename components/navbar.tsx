"use client"

import NavLinks from "@/components/nav-links"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 justify-between">

          <div className="flex-shrink-0 text-2xl font-bold bg-gradient-to-r from-gray-700 via-indigo-500 to-gray-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            Calculadora de errores
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <NavLinks />
          </div>

          <div className="flex-shrink-0">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-6 py-3 border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <p className="text-lg font-semibold text-black text-center whitespace-nowrap">
                Grupo 6: Vetere, Forlini, Giordani y Sampaoli
              </p>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}
