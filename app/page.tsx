"use client"

import { Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ErrorCard, { ErrorCardProps } from "@/components/error-card"

export default function HomePage() {
  const cards: ErrorCardProps[] = [
    {
      title: "Error",
      description:
        "El error es la diferencia entre el valor exacto y el valor aproximado de una cantidad. En todas las mediciones y cálculos numéricos, siempre existe algún grado de error, ya que las mediciones no son perfectas.",
      formula: "Δa = α − a",
      consigna: "Medir la longitud de una mesa",
      valores: ["Valor exacto (α): 90,5 cm", "Valor aproximado (a): 90,4 cm"],
      calculo: "Δa = α − a = 90,5cm − 90,4cm = 0,1 cm",
    },
    {
      title: "Error Relativo",
      description:
        "El error relativo es el cociente entre el error absoluto y el valor exacto. Es adimensional y permite comparar errores de diferentes magnitudes.",
      formula: "ε(α) = Δa / α , α ≠ 0",
      consigna: "Medimos la temperatura del agua y obtenemos 99°C. El valor exacto es 100°C",
      valores: ["Error absoluto (Δa): 100° - 99° = 1°C ", "Valor exacto (α): 100°C"],
      calculo: "ε(α) = Δa / α = 1 / 100 = 0,01",
    },
    {
      title: "Error Porcentual",
      description:
        "El error porcentual es el error relativo expresado como porcentaje. Se obtiene multiplicando el error relativo por 100. Esta forma de expresarlo permite evaluar rápidamente la precisión de una medición o estimación.",
      formula: "ε%(α) = ε(α) × 100",
      consigna: "Usar el error relativo anteriormente calculado",
      valores: ["Error relativo: 0,01"],
      calculo: "ε%(α) = 0,01 × 100 = 1%",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
    

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

          
          <div className="grid gap-8 mb-12">
            {cards.map((card) => (
              <ErrorCard key={card.title} {...card} />
            ))}
          </div>

     
          <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              Conceptos Adicionales
            </h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6 text-lg font-medium">
                La teoría de errores es fundamental en cualquier medición científica o técnica. Comprender estos
                conceptos nos permite evaluar la precisión y confiabilidad de nuestros datos experimentales.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg font-medium">
                Siempre existe algún grado de incertidumbre debido a limitaciones del instrumento de medida,
                condiciones ambientales, o la propia naturaleza del proceso de medición.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/calculadora">
              <Button
                size="lg"
                className="px-10 py-4 flex items-center gap-3 mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-semibold"
              >
                <Calculator className="h-5 w-5" />
                Ir a la Calculadora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
