import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TeoriaErrores from "@/components/teoria-errores"

export default function HomePage() {
  const V_exacto = 100 
  const V_aproximado = 95 
  const E_a = Math.abs(V_exacto - V_aproximado) 
  const E_r = E_a / Math.abs(V_exacto) 
  const E_p = E_r * 100 

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-20 text-balance whitespace-nowrap mt-10 animate-pulse-glow bg-gradient-to-r from-black-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Error Relativo y Error Porcentual
          </h1>


          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-balance">
            Comparación de Errores
          </h2>

          <div className="bg-primary/10 rounded-full px-10 py-4 mb-10 inline-block animate-scale-in">
            <p className="text-lg font-semibold text-foreground">Grupo 6: Vetere, Forlini, Giordani y Sampaoli</p>
          </div>

       
          <div className="mb-2">
            <p className="text-xl md:text-2xl font-medium text-primary text-balance">
              En toda medición existe error: nunca se obtiene el valor exacto.
            </p>
          </div>
        </div>
        <TeoriaErrores/>
       
     

       
        
      </div>
    </div>
  )
}
