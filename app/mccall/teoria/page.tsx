import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function McCallTeoriaPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Modelo de Calidad McCall - Teoría</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introducción al Modelo McCall</CardTitle>
          <CardDescription>Fundamentos teóricos del modelo de calidad</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Presentado en 1977 por Jim McCall, Richards y Walters, este modelo propone una serie de factores de calidad
            conocidos como factores de McCall. La idea del modelo es la descomposición del concepto genérico de calidad
            en tres capacidades importantes para un producto software:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Operación</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Corrección:</strong> Grado en que un programa satisface sus especificaciones.
                  </li>
                  <li>
                    <strong>Confiabilidad:</strong> Grado en que se puede esperar que un programa lleve a cabo sus
                    funciones.
                  </li>
                  <li>
                    <strong>Usabilidad:</strong> Esfuerzo requerido para aprender y operar el sistema.
                  </li>
                  <li>
                    <strong>Integridad:</strong> Grado en que el acceso al software puede ser controlado.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transición</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Portabilidad:</strong> Esfuerzo necesario para transferir el programa de un entorno a otro.
                  </li>
                  <li>
                    <strong>Reusabilidad:</strong> Grado en que un programa puede ser reutilizado en otras aplicaciones.
                  </li>
                  <li>
                    <strong>Interoperabilidad:</strong> Esfuerzo necesario para acoplar un sistema con otro.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revisión</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Facilidad de Mantenimiento:</strong> Esfuerzo requerido para localizar y arreglar errores.
                  </li>
                  <li>
                    <strong>Flexibilidad:</strong> Facilidad de modificación y adaptación a nuevos requisitos.
                  </li>
                  <li>
                    <strong>Facilidad de Prueba:</strong> Facilidad para probar el programa y verificar su
                    funcionamiento.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Métricas del Modelo McCall</h3>
            <p>
              El modelo McCall propone una serie de métricas para evaluar cada uno de los factores de calidad. Estas
              métricas incluyen:
            </p>
            <ul className="list-disc pl-5 mt-2 grid md:grid-cols-2 gap-2">
              <li>Compleción de las funciones</li>
              <li>Complejidad</li>
              <li>Concisión</li>
              <li>Consistencia</li>
              <li>Eficiencia de ejecución</li>
              <li>Estandarización de datos y estructuras</li>
              <li>Exactitud de cálculo y de control</li>
              <li>Independencia del software</li>
              <li>Modularidad</li>
              <li>Operatividad</li>
              <li>Seguridad</li>
              <li>Simplicidad</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Evaluación con el Modelo McCall</CardTitle>
          <CardDescription>Metodología de aplicación</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Para la evaluación con el modelo McCall, se asignan puntajes a cada capacidad según los factores evaluados:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Capacidad</th>
                  <th className="border p-2 text-left">Puntaje</th>
                  <th className="border p-2 text-left">Factor</th>
                  <th className="border p-2 text-left">Puntaje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Operación
                  </td>
                  <td className="border p-2" rowSpan={4}>
                    40
                  </td>
                  <td className="border p-2">Corrección</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Confiabilidad</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Usabilidad</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Integridad o Seguridad</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Transición
                  </td>
                  <td className="border p-2" rowSpan={3}>
                    30
                  </td>
                  <td className="border p-2">Portabilidad</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Reusabilidad</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Interoperabilidad</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Revisión
                  </td>
                  <td className="border p-2" rowSpan={3}>
                    30
                  </td>
                  <td className="border p-2">Facilidad Mantenimiento</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Flexibilidad</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Facilidad de Prueba</td>
                  <td className="border p-2">10</td>
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

