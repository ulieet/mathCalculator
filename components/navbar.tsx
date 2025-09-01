"use client"

import NavLinks from "@/components/nav-links"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between h-auto md:h-20 py-2 md:py-0 gap-2 md:gap-0">

   
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-gray-700 via-indigo-500 to-gray-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              Calculadora de errores 
            </div>
            <img
              src="/jared.jpeg"
              alt="Jared"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

       
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <NavLinks />
          </div>

        </div>
      </div>
    </nav>
  )
}
