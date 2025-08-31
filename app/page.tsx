"use client"

import TeoriaErrores from "@/components/teoria-errores"
import Navbar from "@/components/navbar"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <Navbar />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-16">

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight bg-gradient-to-r from-gray-700 via-indigo-500 to-gray-800 bg-clip-text text-transparent leading-tight animate-fadeInUp">
              Error Relativo y Error Porcentual
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 mb-12 text-balance animate-fadeInUp animate-delay-300">
              Comparación de Errores
            </h2>

            <div className="max-w-4xl mx-auto mb-16 p-8 bg-gradient-to-r from-indigo-500/5 via-gray-500/5 to-indigo-500/5 rounded-3xl border border-gray-200 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeInUp animate-delay-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-gray-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-2xl md:text-3xl font-bold text-gray-700 text-balance leading-relaxed relative z-10">
                En toda medición existe error: nunca se obtiene el valor exacto.
              </p>
            </div>

          </div>

          <div className="animate-fadeInUp animate-delay-700">
            <TeoriaErrores />
          </div>

        </div>
      </div>
    </div>
  )
}
