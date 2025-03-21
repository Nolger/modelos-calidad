import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FurpsTeoriaPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Modelo de Calidad FURPS - Teoría</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introducción al Modelo FURPS</CardTitle>
          <CardDescription>Fundamentos teóricos del modelo de calidad</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            El modelo FURPS fue desarrollado por Robert Grady y Hewlett Packard (HP) en 1987. El nombre FURPS es un
            acrónimo que representa las cinco características principales de calidad del software:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>F</strong>unctionality (Funcionalidad)
            </li>
            <li>
              <strong>U</strong>sability (Facilidad de Uso)
            </li>
            <li>
              <strong>R</strong>eliability (Confiabilidad)
            </li>
            <li>
              <strong>P</strong>erformance (Rendimiento)
            </li>
            <li>
              <strong>S</strong>upportability (Soporte)
            </li>
          </ul>

          <p>
            Este modelo se emplea para identificar diferentes factores de calidad de software, proporcionando un marco
            para la evaluación completa de un producto de software.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Funcionalidad (F)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Evalúa las características y capacidades del programa, incluyendo:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Características y capacidades del programa</li>
                  <li>Generalidad de las funciones</li>
                  <li>Seguridad del Sistema</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facilidad de Uso (U)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Evalúa factores humanos, estética, consistencia y documentación:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Capacidad de Prueba</li>
                  <li>Capacidad de configuración</li>
                  <li>Compatibilidad</li>
                  <li>Requisitos de instalación</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Confiabilidad (R)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Evalúa la frecuencia y severidad de fallos, exactitud y capacidad de recuperación:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Frecuencia y severidad de fallos</li>
                  <li>Exactitud de las salidas</li>
                  <li>Capacidad de predicción</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rendimiento (P)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Evalúa la velocidad de procesamiento, tiempo de respuesta y consumo de recursos:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Factores Humanos</li>
                  <li>Factores Estéticos</li>
                  <li>Consistencia de la interfaz</li>
                  <li>Documentación</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soporte (S)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Evalúa la extensibilidad, adaptabilidad y capacidad de servicio:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Velocidad de procesamiento</li>
                  <li>Tiempo de respuesta</li>
                  <li>Consumo de recursos</li>
                  <li>Rendimiento efectivo total</li>
                  <li>Eficacia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estructura del Modelo FURPS</CardTitle>
          <CardDescription>Distribución de puntajes por característica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Características</th>
                  <th className="border p-2 text-left">Puntaje</th>
                  <th className="border p-2 text-left">Factor</th>
                  <th className="border p-2 text-left">Puntaje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Funcionalidad (F)
                  </td>
                  <td className="border p-2" rowSpan={3}>
                    30
                  </td>
                  <td className="border p-2">Características y capacidades del programa</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Generalidad de las funciones</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Seguridad del Sistema</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Facilidad de Uso (U)
                  </td>
                  <td className="border p-2" rowSpan={4}>
                    20
                  </td>
                  <td className="border p-2">Capacidad de Prueba</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de configuración</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Compatibilidad</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Requisitos de instalación</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Confiabilidad (R)
                  </td>
                  <td className="border p-2" rowSpan={3}>
                    15
                  </td>
                  <td className="border p-2">Frecuencia y severidad de fallos</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Exactitud de las salidas</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de predicción</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Rendimiento (P)
                  </td>
                  <td className="border p-2" rowSpan={4}>
                    20
                  </td>
                  <td className="border p-2">Factores Humanos</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Factores Estéticos</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia de la interfaz</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Documentación</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={5}>
                    Soporte (S)
                  </td>
                  <td className="border p-2" rowSpan={5}>
                    15
                  </td>
                  <td className="border p-2">Velocidad de procesamiento</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2">Tiempo de respuesta</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2">Consumo de recursos</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2">Rendimiento efectivo total</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficacia</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr className="bg-muted">
                  <td className="border p-2">Puntaje Total</td>
                  <td className="border p-2">100</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

