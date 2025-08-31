import Image from "next/image"

export default function GrupoSection() {
  const integrantes = [
    { nombre: "Vétere", rol: "Ulises"},
    { nombre: "Forlini", rol: "Martin Simon" },
    { nombre: "Giordani", rol: "Luca" },
    { nombre: "Sampaoli", rol: "Nicolas" },
  ]

  return (
    <section id="grupo" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-10">Nuestro Grupo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Grupo 6 - Equipo de desarrollo de la Calculadora de Errores
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8 md:p-12">
          <div className="flex justify-center mb-12">
            <div className="relative w-80 h-75 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <Image
                src="/jared.jpeg"
                alt="Foto del Grupo 6"
                width={320}
                height={240}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrantes.map((integrante, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{integrante.nombre.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{integrante.nombre}</h3>
                  <p className="text-sm text-gray-600">{integrante.rol}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Grupo 6</h3>
              <p className="text-gray-700">Vetere • Forlini • Giordani • Sampaoli</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
