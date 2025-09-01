"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator } from "lucide-react"

export default function CalculadoraPage() {
  const [valorExacto, setValorExacto] = useState("")
  const [valorAproximado, setValorAproximado] = useState("")
  const [resultados, setResultados] = useState<{
    valorExacto: number
    valorAproximado: number
    errorAbsoluto: number
    errorRelativo: number
    errorPorcentual: number
  } | null>(null)

  const calcular = () => {
    const exacto = parseFloat(valorExacto) //Uso parsefloat para poder operar.
    const aproximado = parseFloat(valorAproximado)

    if (isNaN(exacto) || isNaN(aproximado)) {
      alert("Por favor, ingrese valores numéricos válidos")
      return
    }

    if (exacto === 0) {
      alert("El valor exacto no puede ser cero para calcular el error relativo")
      return
    }

    //Actualizo estados de resultados
    setResultados({
      valorExacto: exacto,
      valorAproximado: aproximado,
      errorAbsoluto: exacto - aproximado,
      errorRelativo: (exacto - aproximado) / exacto,
      errorPorcentual: ((exacto - aproximado) / exacto) * 100,
    })
  }

  const limpiar = () => {
    setValorExacto("")
    setValorAproximado("")
    setResultados(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-8 shadow-sm mt-15">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instrucciones de Uso</h2>
            <div className="space-y-2 text-gray-600 text-lg">
              <p>• Ingrese el <strong className="text-gray-800">valor aproximado</strong> (α)</p>
              <p>• Ingrese el <strong className="text-gray-800">valor medido</strong> (a)</p>
              <p>• Presione "Calcular" para obtener Δa, ε(α) y ε%(α)</p>
            </div>
          </CardContent>
        </Card>

        
        <Card className="mt-8 shadow-sm mb-10">
          <CardHeader>
            <CardTitle className="text-gray-800 text-xl">Fórmulas Utilizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-lg">
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-gray-800">Error</h4>
                <div className="p-4 rounded border border-gray-200 bg-white">
                  Δa = α − a
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-gray-800">Error Relativo</h4>
                <div className="p-4 rounded border border-gray-200 bg-white">
                  ε(α) = Δa / α , α ≠ 0
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-gray-800">Error Porcentual</h4>
                <div className="p-4 rounded border border-gray-200 bg-white">
                  ε%(α) = ε(α) × 100
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-gray-200 shadow-sm h-[380px] transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800 text-xl">
                <Calculator className="w-6 h-6 text-gray-600" />
                Datos de Entrada
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-9 h-full">
              <div className="space-y-2">
                <Label htmlFor="valor-exacto" className="text-gray-700 font-medium text-lg">
                  Valor aproximado (α)
                </Label>
                <Input
                  id="valor-exacto"
                  type="number"
                  step="any"
                  placeholder="Ej: 10.5"
                  value={valorExacto}
                  onChange={(e) => setValorExacto(e.target.value)}
                  className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="valor-aproximado" className="text-gray-700 font-medium text-lg">
                  Valor Medido (a)
                </Label>
                <Input
                  id="valor-aproximado"
                  type="number"
                  step="any"
                  placeholder="Ej: 10.2"
                  value={valorAproximado}
                  onChange={(e) => setValorAproximado(e.target.value)}
                  className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-2xl"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <Button onClick={calcular} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-lg">
                  Calcular
                </Button>
                <Button onClick={limpiar} variant="outline" className="flex-1 border-gray-300 hover:bg-gray-100 text-gray-700 text-lg">
                  Limpiar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-gray-800 text-xl">Resultados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resultados ? (
                <>
                  <div className="p-4 rounded-lg border border-gray-200 bg-white">
                    <h3 className="font-semibold text-gray-800 mb-2">Error (Δa)</h3>
                    <p className="text-2xl font-mono text-gray-900">
                      {resultados.errorAbsoluto.toLocaleString("es-AR", { maximumFractionDigits: 4 })}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Δa = {resultados.valorExacto} − {resultados.valorAproximado} = {resultados.errorAbsoluto.toLocaleString("es-AR", { maximumFractionDigits: 4 })}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200 bg-white">
                    <h3 className="font-semibold text-gray-800 mb-2">Error Relativo (ε(α))</h3>
                    <p className="text-2xl font-mono text-gray-900">
                      {resultados.errorRelativo.toLocaleString("es-AR", { maximumFractionDigits: 6 })}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      ε(α) = {resultados.errorAbsoluto.toLocaleString("es-AR", { maximumFractionDigits: 4 })} ÷ {resultados.valorExacto} = {resultados.errorRelativo.toLocaleString("es-AR", { maximumFractionDigits: 6 })}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200 bg-white">
                    <h3 className="font-semibold text-gray-800 mb-2">Error Porcentual (ε%(α))</h3>
                    <p className="text-2xl font-mono text-gray-900">
                      {resultados.errorPorcentual.toLocaleString("es-AR", { maximumFractionDigits: 2 })}%
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      ε%(α) = {resultados.errorRelativo.toLocaleString("es-AR", { maximumFractionDigits: 6 })} × 100 = {resultados.errorPorcentual.toLocaleString("es-AR", { maximumFractionDigits: 2 })}%
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-lg text-gray-600">
                  Ingrese los valores y presione "Calcular" para ver los resultados
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
