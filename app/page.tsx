import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartComponent } from "@/components/chart-component"

export default function Home() {
  // Datos para las gráficas
  const comparacionModelosData = [
    { name: "McCall", value: 76.4, percentage: 76.4, color: "#3b82f6" },
    { name: "Boehm", value: 93.8, percentage: 93.8, color: "#10b981" },
    { name: "FURPS", value: 84.8, percentage: 84.8, color: "#f59e0b" },
  ]

  return (
    <div className="container px-4 py-10 sm:px-6">
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[58rem] text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Modelos de Calidad de Software
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg md:text-xl">
            Explore los principales modelos de calidad: McCall, Boehm y FURPS, sus fundamentos teóricos y aplicaciones
            prácticas.
          </p>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col overflow-hidden border-2 hover:border-primary transition-colors">
            <div className="bg-primary h-2"></div>
            <CardHeader>
              <CardTitle>Modelo de McCall</CardTitle>
              <CardDescription>Enfocado en la perspectiva del usuario y el desarrollador</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                El modelo de McCall organiza los factores de calidad en tres perspectivas: operación del producto,
                revisión del producto y transición del producto.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2 w-full">
                <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <Link href="/mccall/teoria">Teoría</Link>
                </Button>
                <Button asChild size="sm" className="flex-1 sm:flex-none">
                  <Link href="/mccall/aplicacion">Aplicación</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="flex flex-col overflow-hidden border-2 hover:border-primary transition-colors">
            <div className="bg-primary h-2"></div>
            <CardHeader>
              <CardTitle>Modelo de Boehm</CardTitle>
              <CardDescription>Orientado a la evaluación de la calidad del software</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                El modelo de Boehm establece características de alto nivel que contribuyen a la calidad general del
                software, incluyendo utilidad, mantenibilidad y portabilidad.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2 w-full">
                <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <Link href="/boehm/teoria">Teoría</Link>
                </Button>
                <Button asChild size="sm" className="flex-1 sm:flex-none">
                  <Link href="/boehm/aplicacion">Aplicación</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="flex flex-col overflow-hidden border-2 hover:border-primary transition-colors">
            <div className="bg-primary h-2"></div>
            <CardHeader>
              <CardTitle>Modelo FURPS</CardTitle>
              <CardDescription>Desarrollado por Hewlett-Packard para la evaluación de calidad</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                FURPS descompone la calidad en componentes: Funcionalidad, Usabilidad, Confiabilidad, Rendimiento y
                Capacidad de soporte.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2 w-full">
                <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <Link href="/furps/teoria">Teoría</Link>
                </Button>
                <Button asChild size="sm" className="flex-1 sm:flex-none">
                  <Link href="/furps/aplicacion">Aplicación</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <Card>
          <CardHeader>
            <CardTitle>Comparación de Resultados</CardTitle>
            <CardDescription>Análisis comparativo de los tres modelos aplicados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <ChartComponent
                  title="Puntajes por Modelo"
                  description="Comparación de los resultados obtenidos"
                  type="bar"
                  data={comparacionModelosData}
                  maxValue={100}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Resultados del Análisis</h3>
                <p className="mb-4">
                  La aplicación de los tres modelos de calidad (McCall, Boehm y FURPS) a la página web de Pollo Frisby
                  muestra resultados consistentes pero con diferencias significativas:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    El modelo <strong>Boehm</strong> otorga la puntuación más alta (93.8%), destacando la utilidad y
                    mantenibilidad.
                  </li>
                  <li>
                    El modelo <strong>FURPS</strong> proporciona una evaluación intermedia (84.8%), con énfasis en
                    rendimiento y soporte.
                  </li>
                  <li>
                    El modelo <strong>McCall</strong> ofrece la puntuación más baja (76.4%), siendo más exigente en
                    aspectos técnicos.
                  </li>
                </ul>
                <div className="mt-4">
                  <Button asChild className="w-full md:w-auto">
                    <Link href="/comparacion">Ver análisis completo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

