import { Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeoriaErrores() {
  return (
    <section className="animate-slide-in-up" style={{ animationDelay: "0.2s" }} >
      <div className="bg-card rounded-2xl p-8 border-2 border-primary/10 shadow-xl hover-lift">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-card-foreground">Teoría Introductoria</h2>
        </div>

        <div className="grid gap-6 px-10">
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 hover-lift">
            <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              Error Absoluto
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El error absoluto es la diferencia entre el valor exacto y el aproximado. Se expresa con las mismas
              unidades que la medida (metros, segundos, kg, etc.). Puede ser positivo o negativo, dependiendo de si el
              valor medido es mayor o menor al real.
            </p>
            <div className="p-4 bg-card rounded-lg border border-primary/10">
              <p className="font-mono text-sm text-center font-semibold">{"$$E_a = V_{exacto} - V_{aproximado}$$"}</p>
            </div>
          </div>

          <div className="p-6 bg-accent/5 rounded-xl border border-accent/20 hover-lift">
            <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              Error Relativo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El error relativo es el cociente entre el error absoluto y el valor exacto. Es adimensional y permite
              comparar errores de diferentes magnitudes.
            </p>
            <div className="p-4 bg-card rounded-lg border border-accent/10">
              <p className="font-mono text-sm text-center font-semibold">{"$$E_r = \\frac{E_a}{V_{exacto}}$$"}</p>
            </div>
          </div>

          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-500/20 hover-lift">
            <h3 className="text-xl font-semibold mb-3 text-emerald-600 flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              Error Porcentual
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El error porcentual es el error relativo expresado como porcentaje. Se obtiene multiplicando el error
              relativo por 100.
            </p>
            <div className="p-4 bg-card rounded-lg border border-emerald-500/10">
              <p className="font-mono text-sm text-center font-semibold">{"$$E_p = E_r \\times 100$$"}</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          
        </div>
        
      </div>
      <Link href="/calculadora">
            <Button size="lg" className="text-lg px-8 py-3 flex items-center gap-2 mt-6 mx-auto text-white">
              Ir a la Calculadora
            </Button>
          </Link>
      
    </section>

    
  )
}
