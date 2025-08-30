"use client"

import { Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ErrorCardProps {
  title: string
  description: string
  formula: string
  consigna: string
  valores: string[]
  calculo: string
}

function ErrorCard({ title, description, formula, consigna, valores, calculo }: ErrorCardProps) {
  return (
    <div className="p-8 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        {title}
      </h3>

      <p className="text-slate-700 leading-relaxed mb-6 text-lg font-medium">{description}</p>

      <div className="p-6 rounded-lg border border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 mb-8">
        <p className="font-mono text-center font-bold text-slate-800 text-3xl tracking-wide">{formula}</p>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 mt-15">Ejemplo Práctico</h4>

        <div className="mb-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg mt-5">
          <p className="text-slate-800 font-semibold text-lg">
            <span className="text-amber-700 font-bold ">Consigna:</span> {consigna}
          </p>
        </div>

        <ul className="space-y-2 mb-6">
          {valores.map((v, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-lg">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-3 flex-shrink-0"></div>
              <span className="font-medium">{v}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <p className="text-slate-900 font-bold text-xl mb-4 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-600" />
            Cálculo:
          </p>
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-200">
            <pre className="font-mono whitespace-pre-wrap text-2xl text-white font-semibold leading-relaxed">
              {calculo}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeoriaErrores() {
  const cards: ErrorCardProps[] = [
    {
      title: "Error Absoluto",
      description:
        "El error absoluto es la diferencia entre el valor exacto y el valor aproximado de una cantidad. En todas las mediciones y cálculos numéricos, siempre existe algún grado de error, ya que las mediciones no son perfectas.",
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
    <section className="max-w-5xl mx-auto px-4">
      <div className="rounded-2xl p-10 border border-slate-200 shadow-lg bg-white">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Teoría de Errores</h1>
            <p className="text-xl text-slate-600 font-medium">Conceptos fundamentales</p>
          </div>
        </div>

        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-12"></div>

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
              La teoría de errores es fundamental en cualquier medición científica o técnica. Comprender estos conceptos
              nos permite evaluar la precisión y confiabilidad de nuestros datos experimentales. El error absoluto nos
              da una medida directa de la desviación, mientras que el error relativo nos permite comparar la calidad de
              mediciones de diferentes magnitudes.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              Es importante recordar que ninguna medición es perfecta. Siempre existe algún grado de incertidumbre
              debido a limitaciones del instrumento de medida, condiciones ambientales, o la propia naturaleza del
              proceso de medición. Por esta razón, es crucial reportar siempre nuestras mediciones junto con una
              estimación del error asociado.
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
    </section>
  )
}
