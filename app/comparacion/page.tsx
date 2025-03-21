import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChartComponent } from "@/components/chart-component"

export default function ComparacionPage() {
  // Datos para las gráficas
  const comparacionModelosData = [
    { name: "McCall", value: 76.4, percentage: 76.4, color: "#3b82f6" },
    { name: "Boehm", value: 93.8, percentage: 93.8, color: "#10b981" },
    { name: "FURPS", value: 84.8, percentage: 84.8, color: "#f59e0b" },
  ]

  const promedioData = [{ name: "Promedio", value: 85.0, percentage: 85.0, color: "#8b5cf6" }]

  const caracteristicasComparativasData = [
    { name: "Operación/Funcionalidad", value: 80.5, model: "McCall", color: "#3b82f6" },
    { name: "Utilidad", value: 89.7, model: "Boehm", color: "#10b981" },
    { name: "Usabilidad", value: 87.5, model: "FURPS", color: "#f59e0b" },
    { name: "Transición/Portabilidad", value: 62.7, model: "McCall", color: "#60a5fa" },
    { name: "Mantenibilidad", value: 100.0, model: "Boehm", color: "#34d399" },
    { name: "Confiabilidad", value: 83.3, model: "FURPS", color: "#fbbf24" },
    { name: "Revisión", value: 85.0, model: "McCall", color: "#93c5fd" },
    { name: "Rendimiento", value: 94.0, model: "FURPS", color: "#fcd34d" },
    { name: "Soporte", value: 90.0, model: "FURPS", color: "#fdba74" },
  ]

  const fortalezasDebilidadesData = [
    { name: "Fortalezas", value: 90.0, color: "#10b981" },
    { name: "Debilidades", value: 70.0, color: "#ef4444" },
    { name: "Promedio", value: 85.0, color: "#8b5cf6" },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Comparación de Modelos de Calidad</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Resumen Comparativo</CardTitle>
          <CardDescription>Análisis de los tres modelos de calidad estudiados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Característica</th>
                  <th className="border p-2 text-left">McCall (1977)</th>
                  <th className="border p-2 text-left">Boehm (1978)</th>
                  <th className="border p-2 text-left">FURPS (1987)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Enfoque Principal</td>
                  <td className="border p-2">Perspectiva del usuario y desarrollador</td>
                  <td className="border p-2">Utilidad general del software</td>
                  <td className="border p-2">Características específicas del producto</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Estructura</td>
                  <td className="border p-2">3 capacidades, 11 factores, múltiples métricas</td>
                  <td className="border p-2">Características de alto nivel, nivel intermedio y primitivas</td>
                  <td className="border p-2">5 características principales con subfactores</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Fortalezas</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-5">
                      <li>Visión completa del producto</li>
                      <li>Equilibrio entre aspectos técnicos y de usuario</li>
                      <li>Métricas bien definidas</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-5">
                      <li>Estructura jerárquica clara</li>
                      <li>Enfoque en la utilidad práctica</li>
                      <li>Características primitivas medibles</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-5">
                      <li>Fácil de recordar y aplicar</li>
                      <li>Enfoque en aspectos críticos</li>
                      <li>Adaptable a diferentes tipos de software</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Limitaciones</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-5">
                      <li>Complejidad en la aplicación</li>
                      <li>Algunas métricas son subjetivas</li>
                      <li>Modelo relativamente antiguo</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-5">
                      <li>Puede ser demasiado teórico</li>
                      <li>Algunas características se solapan</li>
                      <li>Menos enfoque en seguridad</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-5">
                      <li>Menos detallado que otros modelos</li>
                      <li>Puede omitir aspectos específicos</li>
                      <li>Menos énfasis en mantenibilidad</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Mejor para</td>
                  <td className="border p-2">Evaluación técnica detallada</td>
                  <td className="border p-2">Análisis de utilidad y mantenibilidad</td>
                  <td className="border p-2">Evaluación rápida y práctica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <ChartComponent
          title="Comparación de Puntajes"
          description="Puntajes obtenidos en cada modelo de calidad"
          type="bar"
          data={comparacionModelosData}
          maxValue={100}
        />

        <ChartComponent
          title="Características Comparativas"
          description="Porcentajes de cumplimiento por característica y modelo"
          type="radar"
          data={caracteristicasComparativasData}
          maxValue={100}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Resultados McCall</CardTitle>
            <CardDescription>Puntaje: 76.4/100</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Operación (32.2/40)</span>
                  <span>80.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80.5%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Transición (18.8/30)</span>
                  <span>62.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "62.7%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Revisión (25.5/30)</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button asChild size="sm" className="w-full">
                <Link href="/mccall/aplicacion">Ver detalles</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resultados Boehm</CardTitle>
            <CardDescription>Puntaje: 93.8/100</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Portabilidad (6.3/10)</span>
                  <span>63%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "63%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Utilidad (53.8/60)</span>
                  <span>89.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "89.7%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Mantenibilidad (33.8/30)</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button asChild size="sm" className="w-full">
                <Link href="/boehm/aplicacion">Ver detalles</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resultados FURPS</CardTitle>
            <CardDescription>Puntaje: 84.8/100</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Funcionalidad (22.5/30)</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Usabilidad (17.5/20)</span>
                  <span>87.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "87.5%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Confiabilidad (12.5/15)</span>
                  <span>83.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "83.3%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button asChild size="sm" className="w-full">
                <Link href="/furps/aplicacion">Ver detalles</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Conclusiones Generales</CardTitle>
          <CardDescription>Análisis comparativo de los resultados</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <ChartComponent
              title="Puntaje Promedio"
              description="Promedio de los tres modelos de calidad"
              type="pie"
              data={[
                { name: "Puntaje Obtenido", value: 85.0, color: "#8b5cf6" },
                { name: "Puntaje Restante", value: 15.0, color: "#e5e7eb" },
              ]}
            />

            <ChartComponent
              title="Fortalezas y Debilidades"
              description="Análisis de áreas fuertes y débiles"
              type="bar"
              data={fortalezasDebilidadesData}
              maxValue={100}
            />
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Modelo</th>
                  <th className="border p-2 text-left">Puntaje</th>
                  <th className="border p-2 text-left">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">McCall</td>
                  <td className="border p-2">76.4/100</td>
                  <td className="border p-2">76.4%</td>
                </tr>
                <tr>
                  <td className="border p-2">Boehm</td>
                  <td className="border p-2">93.8/100</td>
                  <td className="border p-2">93.8%</td>
                </tr>
                <tr>
                  <td className="border p-2">FURPS</td>
                  <td className="border p-2">84.8/100</td>
                  <td className="border p-2">84.8%</td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border p-2">Promedio</td>
                  <td className="border p-2">85.0/100</td>
                  <td className="border p-2">85.0%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Tras aplicar los tres modelos de calidad (McCall, Boehm y FURPS) a la página web de Pollo Frisby, se pueden
            extraer las siguientes conclusiones:
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">1. Diferencias en los enfoques de evaluación</h3>
              <p>
                Cada modelo prioriza diferentes aspectos de la calidad del software, lo que explica las variaciones en
                las puntuaciones finales. Mientras McCall se centra más en aspectos técnicos, Boehm enfatiza la utilidad
                general y FURPS ofrece un enfoque más equilibrado.
              </p>
            </div>

            <div
              className="bg-muted p-
4 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-2">2. Fortalezas identificadas</h3>
              <p>
                Los tres modelos coinciden en destacar las fortalezas de la plataforma en términos de usabilidad,
                interfaz de usuario y funcionalidad. La web demuestra un buen rendimiento en aspectos relacionados con
                la experiencia del usuario final.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">3. Áreas de mejora</h3>
              <p>
                Se identificaron oportunidades de mejora principalmente en aspectos de portabilidad, accesibilidad para
                usuarios con limitaciones y algunas características de confiabilidad como la frecuencia de fallos.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">4. Complementariedad de los modelos</h3>
              <p>
                La aplicación de múltiples modelos de calidad proporciona una visión más completa y equilibrada del
                software evaluado, compensando las limitaciones inherentes a cada modelo individual.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">5. Calificación general</h3>
              <p>
                Con un promedio de 85% entre los tres modelos, la página web de Pollo Frisby puede considerarse un
                producto de software de alta calidad, especialmente en el contexto de plataformas de comercio
                electrónico para servicios de comida rápida.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

