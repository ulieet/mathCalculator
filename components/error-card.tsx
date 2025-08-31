"use client"

import { Calculator } from "lucide-react"

export interface ErrorCardProps {
  title: string
  description: string
  formula: string
  consigna: string
  valores: string[]
  calculo: string
}

export default function ErrorCard({
  title,
  description,
  formula,
  consigna,
  valores,
  calculo,
}: ErrorCardProps) {
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
        <h4 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 mt-15">
          Ejemplo Práctico
        </h4>

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
