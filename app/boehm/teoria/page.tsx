import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BoehmTeoriaPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Modelo de Calidad Boehm - Teoría</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introducción al Modelo Boehm</CardTitle>
          <CardDescription>Fundamentos teóricos del modelo de calidad</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Presentado por Barry Boehm en 1978, este modelo introduce características de alto nivel, características de
            nivel intermedio y características primitivas, cada una de las cuales contribuye al nivel general de calidad
            del software.
          </p>

          <p>
            El modelo de Boehm se centra en evaluar la utilidad general del software desde la perspectiva del usuario
            final, considerando tanto aspectos técnicos como no técnicos.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Características de Alto Nivel</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Representan los requisitos generales de uso del software:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Utilidad General:</strong> Facilidad con la que el software puede ser usado.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Características de Nivel Intermedio</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Factores que determinan la utilidad general:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Portabilidad:</strong> Facilidad de usar el software en diferentes entornos.
                  </li>
                  <li>
                    <strong>Utilidad:</strong> Facilidad de uso y adaptabilidad del software.
                  </li>
                  <li>
                    <strong>Mantenibilidad:</strong> Facilidad de modificación y prueba del software.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Características Primitivas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Atributos técnicos que pueden ser evaluados:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Independencia de Dispositivos</strong>
                  </li>
                  <li>
                    <strong>Auto-contención</strong>
                  </li>
                  <li>
                    <strong>Precisión</strong>
                  </li>
                  <li>
                    <strong>Completitud</strong>
                  </li>
                  <li>
                    <strong>Robustez</strong>
                  </li>
                  <li>
                    <strong>Consistencia</strong>
                  </li>
                  <li>
                    <strong>Eficiencia</strong>
                  </li>
                  <li>
                    <strong>Y muchas más...</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estructura del Modelo Boehm</CardTitle>
          <CardDescription>Jerarquía de características</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Características de Alto Nivel</th>
                  <th className="border p-2 text-left">Características de Nivel Intermedio</th>
                  <th className="border p-2 text-left">Características Primitivas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={12}>
                    Utilidad General
                  </td>
                  <td className="border p-2" rowSpan={2}>
                    Portabilidad
                  </td>
                  <td className="border p-2">Independencia de Dispositivos</td>
                </tr>
                <tr>
                  <td className="border p-2">Auto-contención</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Utilidad
                  </td>
                  <td className="border p-2">Fiabilidad (Precisión, Completitud, Robustez, Consistencia)</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia (Responsabilidad)</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia de dispositivos (Accesibilidad)</td>
                </tr>
                <tr>
                  <td className="border p-2">Interactividad (Robustez, Accesibilidad, Capacidad de comunicación)</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={6}>
                    Mantenibilidad
                  </td>
                  <td className="border p-2">Facilidad de Prueba (Auto descripción, Estructuración)</td>
                </tr>
                <tr>
                  <td className="border p-2">Facilidad de Entendimiento (Concisión, Legibilidad)</td>
                </tr>
                <tr>
                  <td className="border p-2">Modificabilidad (Estructuración, Escalabilidad)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Evaluación con el Modelo Boehm</h3>
            <p>
              Para la evaluación con el modelo Boehm, se asigna una tabla de puntuación teniendo en cuenta los niveles
              de cada característica. Cada característica primitiva se evalúa individualmente y contribuye a la
              puntuación de las características de nivel superior.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

