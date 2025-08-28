"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Calculator } from "lucide-react"

export default function CalculadoraPage() {
  const [valorExacto, setValorExacto] = useState("")
  const [valorAproximado, setValorAproximado] = useState("")
  const [resultados, setResultados] = useState<{
    errorAbsoluto: number
    errorRelativo: number
    errorPorcentual: number
  } | null>(null)

  const calcular = () => {
    const exacto = Number.parseFloat(valorExacto)
    const aproximado = Number.parseFloat(valorAproximado)

    if (isNaN(exacto) || isNaN(aproximado)) {
      alert("Por favor, ingrese valores numéricos válidos")
      return
    }

    if (exacto === 0) {
      alert("El valor exacto no puede ser cero para calcular el error relativo")
      return
    }

    const errorAbsoluto = Math.abs(exacto - aproximado)
    const errorRelativo = errorAbsoluto / Math.abs(exacto)
    const errorPorcentual = errorRelativo * 100

    setResultados({
      errorAbsoluto,
      errorRelativo,
      errorPorcentual,
    })
  }

  const limpiar = () => {
    setValorExacto("")
    setValorAproximado("")
    setResultados(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
     
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Calculadora de Errores</h1>
        </div>

      
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Instrucciones de Uso</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                • Ingrese el <strong>valor exacto</strong> (valor teórico o real)
              </p>
              <p>
                • Ingrese el <strong>valor aproximado</strong> (valor medido o calculado)
              </p>
              <p>• Presione "Calcular" para obtener los errores absoluto, relativo y porcentual</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Datos de Entrada
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="valor-exacto">Valor Exacto</Label>
                <Input
                  id="valor-exacto"
                  type="number"
                  step="any"
                  placeholder="Ej: 10.5"
                  value={valorExacto}
                  onChange={(e) => setValorExacto(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="valor-aproximado">Valor Aproximado</Label>
                <Input
                  id="valor-aproximado"
                  type="number"
                  step="any"
                  placeholder="Ej: 10.2"
                  value={valorAproximado}
                  onChange={(e) => setValorAproximado(e.target.value)}
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={calcular} className="flex-1">
                  Calcular
                </Button>
                <Button onClick={limpiar} variant="outline">
                  Limpiar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Resultados</CardTitle>
            </CardHeader>
            <CardContent>
              {resultados ? (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Error Absoluto</h3>
                    <p className="text-2xl font-mono text-primary">{resultados.errorAbsoluto.toFixed(6)}</p>
                    <p className="text-sm text-muted-foreground mt-1">Unidades: mismas que los valores ingresados</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Error Relativo</h3>
                    <p className="text-2xl font-mono text-primary">{resultados.errorRelativo.toFixed(6)}</p>
                    <p className="text-sm text-muted-foreground mt-1">Adimensional</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Error Porcentual</h3>
                    <p className="text-2xl font-mono text-primary">{resultados.errorPorcentual.toFixed(4)}%</p>
                    <p className="text-sm text-muted-foreground mt-1">Expresado en porcentaje</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Ingrese los valores y presione "Calcular" para ver los resultados
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Formulas Reference */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Fórmulas Utilizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Error Absoluto</h4>
                <div className="bg-background p-3 rounded border">
                  <p>{"$$E_a = |V_{exacto} - V_{aproximado}|$$"}</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Error Relativo</h4>
                <div className="bg-background p-3 rounded border">
                  <p>{"$$E_r = \\frac{E_a}{|V_{exacto}|}$$"}</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Error Porcentual</h4>
                <div className="bg-background p-3 rounded border">
                  <p>{"$$E_p = E_r \\times 100\\%$$"}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
