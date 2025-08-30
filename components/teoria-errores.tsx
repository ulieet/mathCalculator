"use client"

import { Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ErrorCardProps {
  title: string
  description: string
  formula: string
}

function ErrorCard({ title, description, formula }: ErrorCardProps) {
  return (
    <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      <div className="p-4 rounded-md border border-gray-100 bg-gray-50">
        <p className="font-mono text-center font-medium text-gray-700 text-3xl">{formula}</p>
      </div>
    </div>
  )
}

export default function TeoriaErrores() {
  const cards = [
    {
      title: "Error Absoluto",
      description:
        "El error absoluto es la diferencia entre el valor exacto y el aproximado. Se expresa con las mismas unidades que la medida (metros, segundos, kg, etc.). Puede ser positivo o negativo, dependiendo de si el valor medido es mayor o menor al real.",
      formula: "Δa = α − a",
    },
    {
      title: "Error Relativo",
      description:
        "El error relativo es el cociente entre el error absoluto y el valor exacto. Es adimensional y permite comparar errores de diferentes magnitudes.",
      formula: "ε(α) = Δa / α , α ≠ 0",
    },
    {
      title: "Error Porcentual",
      description:
        "El error porcentual es el error relativo expresado como porcentaje. Se obtiene multiplicando el error relativo por 100.",
      formula: "ε%(α) = ε(α) × 100",
    },
  ]

  return (
    <section className="max-w-4xl mx-auto">
      <div className="rounded-lg p-8 border border-gray-200 shadow-sm bg-white">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Calculator className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Teoría Introductoria</h2>
        </div>

        <div className="w-24 h-0.5 bg-indigo-500 rounded-full mb-8"></div>

        <div className="grid gap-6 mb-8">
          {cards.map((card) => (
            <ErrorCard key={card.title} title={card.title} description={card.description} formula={card.formula} />
          ))}
        </div>

        <div className="mt-10 p-6 rounded-lg bg-gray-50 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Conceptos Adicionales</h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              La teoría de errores es fundamental en cualquier medición científica o técnica. Comprender estos conceptos
              nos permite evaluar la precisión y confiabilidad de nuestros datos experimentales. El error absoluto nos
              da una medida directa de la desviación, mientras que el error relativo nos permite comparar la calidad de
              mediciones de diferentes magnitudes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Es importante recordar que ninguna medición es perfecta. Siempre existe algún grado de incertidumbre
              debido a limitaciones del instrumento de medida, condiciones ambientales, o la propia naturaleza del
              proceso de medición. Por esta razón, es crucial reportar siempre nuestras mediciones junto con una
              estimación del error asociado.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En la práctica científica, se considera que una medición es más precisa cuando su error relativo es menor.
              Esto nos permite establecer criterios de calidad y comparar diferentes métodos o instrumentos de medición
              de manera objetiva.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/calculadora">
            <Button
              size="lg"
              className="px-8 py-3 flex items-center gap-2 mx-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
            >
              <Calculator className="h-4 w-4" />
              Ir a la Calculadora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
