import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartComponent } from "@/components/chart-component"

export default function BoehmAplicacionPage() {
  // Datos para las gráficas
  const caracteristicasData = [
    { name: "Portabilidad", value: 6.3, fullMark: 10, percentage: 63.0, color: "#3b82f6" },
    { name: "Utilidad", value: 53.8, fullMark: 60, percentage: 89.7, color: "#10b981" },
    { name: "Mantenibilidad", value: 33.8, fullMark: 30, percentage: 100.0, color: "#f59e0b" },
  ]

  const caracteristicasPrimitivasData = [
    { name: "Independencia de Dispositivos", value: 4, fullMark: 4, percentage: 100.0, color: "#3b82f6" },
    { name: "Auto-contención", value: 3, fullMark: 4, percentage: 75.0, color: "#60a5fa" },
    { name: "Fiabilidad", value: 4, fullMark: 4, percentage: 100.0, color: "#10b981" },
    { name: "Eficiencia", value: 4.5, fullMark: 5, percentage: 90.0, color: "#34d399" },
    { name: "Interactividad", value: 3.5, fullMark: 4, percentage: 87.5, color: "#6ee7b7" },
    { name: "Facilidad de Prueba", value: 5, fullMark: 5, percentage: 100.0, color: "#f59e0b" },
    { name: "Facilidad de Entendimiento", value: 5, fullMark: 5, percentage: 100.0, color: "#fbbf24" },
    { name: "Modificabilidad", value: 5, fullMark: 5, percentage: 100.0, color: "#fcd34d" },
  ]

  const resultadoFinalData = [
    { name: "Puntaje Obtenido", value: 93.8, color: "#10b981" },
    { name: "Puntaje Restante", value: 6.2, color: "#e5e7eb" },
  ]

  const comparacionData = [
    { name: "Portabilidad", value: 63, percentage: 63, color: "#3b82f6" },
    { name: "Utilidad", value: 89.7, percentage: 89.7, color: "#10b981" },
    { name: "Mantenibilidad", value: 100, percentage: 100, color: "#f59e0b" },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Modelo de Calidad Boehm - Aplicación</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Software a Evaluar</CardTitle>
          <CardDescription>Información del software evaluado</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold bg-muted">Nombre del Software</td>
                  <td className="border p-2">Página web de Pollo Frisby</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold bg-muted">Repositorio</td>
                  <td className="border p-2">No disponible públicamente (software propietario)</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold bg-muted">Descripción</td>
                  <td className="border p-2">
                    <p>
                      La página web de Pollo Frisby (https://www.frisby.com.co) es una plataforma en línea que permite a
                      los usuarios:
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Realizar pedidos de comida en línea.</li>
                      <li>Consultar el menú disponible.</li>
                      <li>Localizar restaurantes físicos de la cadena.</li>
                      <li>Acceder a promociones y novedades.</li>
                      <li>Descargar la aplicación móvil para una experiencia optimizada.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold bg-muted">Link de Acceso</td>
                  <td className="border p-2">
                    <a
                      href="https://www.frisby.com.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://www.frisby.com.co
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tabla de Puntuación</CardTitle>
          <CardDescription>Puntuación asignada a cada característica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Características de Alto Nivel</th>
                  <th className="border p-2 text-left">Puntaje</th>
                  <th className="border p-2 text-left">Características de Nivel Intermedio</th>
                  <th className="border p-2 text-left">Características Primitivas</th>
                  <th className="border p-2 text-left">Puntaje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={16}>
                    Utilidad General
                  </td>
                  <td className="border p-2" rowSpan={16}>
                    70
                  </td>
                  <td className="border p-2" rowSpan={2}>
                    Portabilidad
                  </td>
                  <td className="border p-2">Independencia de Dispositivos</td>
                  <td className="border p-2">4</td>
                </tr>
                <tr>
                  <td className="border p-2">Auto-contención</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={14}>
                    Utilidad
                  </td>
                  <td className="border p-2" rowSpan={4}>
                    Fiabilidad
                  </td>
                  <td className="border p-2">Precisión</td>
                  <td className="border p-2" rowSpan={4}>
                    4
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Completitud</td>
                </tr>
                <tr>
                  <td className="border p-2">Robustez</td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={2}>
                    Eficiencia
                  </td>
                  <td className="border p-2">Responsabilidad</td>
                  <td className="border p-2" rowSpan={2}>
                    4.5
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia de dispositivos</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={8}>
                    Interactividad
                  </td>
                  <td className="border p-2">Accesibilidad</td>
                  <td className="border p-2" rowSpan={8}>
                    3.5
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Interactividad</td>
                </tr>
                <tr>
                  <td className="border p-2">Robustez</td>
                </tr>
                <tr>
                  <td className="border p-2">Accesibilidad</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de comunicación</td>
                </tr>
                <tr>
                  <td className="border p-2">Auto descripción</td>
                </tr>
                <tr>
                  <td className="border p-2">Estructuración</td>
                </tr>
                <tr>
                  <td className="border p-2">Concisión</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={6}>
                    Mantenibilidad
                  </td>
                  <td className="border p-2" rowSpan={6}>
                    20
                  </td>
                  <td className="border p-2" rowSpan={2}>
                    Facilidad de Prueba
                  </td>
                  <td className="border p-2">Auto descripción</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Estructuración</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={2}>
                    Facilidad de Entendimiento
                  </td>
                  <td className="border p-2">Concisión</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Legibilidad</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={2}>
                    Modificabilidad
                  </td>
                  <td className="border p-2">Estructuración</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Escalabilidad</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border p-2">Puntaje Total</td>
                  <td className="border p-2">100</td>
                  <td className="border p-2" colSpan={2}></td>
                  <td className="border p-2">90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Descripción de las Características y Cuestionario</CardTitle>
          <CardDescription>Evaluación de características primitivas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th colSpan={3} className="border p-2 text-left">
                    Características
                  </th>
                  <th className="border p-2 text-left">Preguntas</th>
                  <th className="border p-2 text-left">Puntaje Esperado</th>
                  <th className="border p-2 text-left">Puntaje Obtenido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={2}>
                    Alto Nivel
                  </td>
                  <td className="border p-2" rowSpan={2}>
                    Portabilidad
                  </td>
                  <td className="border p-2">Independencia de Dispositivos</td>
                  <td className="border p-2">¿La web se puede ejecutar en cualquier dispositivo?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Auto-contención</td>
                  <td className="border p-2">¿La web puede utilizarse offline?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={12}>
                    Utilidad General
                  </td>
                  <td className="border p-2" rowSpan={12}>
                    Utilidad
                  </td>
                  <td className="border p-2">Precisión</td>
                  <td className="border p-2">¿Los resultados obtenidos en el proceso son correctos?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Completitud</td>
                  <td className="border p-2">¿Aborda el desarrollo completo de la temática de aprendizaje?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Robustez</td>
                  <td className="border p-2">¿Cumple con los DBA?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Regular</td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia</td>
                  <td className="border p-2">¿Es ajustable al currículo?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Regular</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia Responsabilidad</td>
                  <td className="border p-2">¿Se realiza un seguimiento del aprendizaje?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia de dispositivos</td>
                  <td className="border p-2">¿Permite ser ejecutado en cualquier dispositivo y/o navegador?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Accesibilidad</td>
                  <td className="border p-2">¿Presenta facilidad de acceso?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Interactividad Robustez</td>
                  <td className="border p-2">¿Posee una Interfaz amigable?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Accesibilidad</td>
                  <td className="border p-2">¿Permite navegación a estudiantes con limitaciones de accesibilidad?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Regular</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de comunicación</td>
                  <td className="border p-2">¿Es interactivo con el usuario?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={6}>
                    Mantenibilidad
                  </td>
                  <td className="border p-2">Auto descripción</td>
                  <td className="border p-2">¿Presenta guías de uso?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Regular</td>
                </tr>
                <tr>
                  <td className="border p-2">Estructuración</td>
                  <td className="border p-2">¿Define organización por módulos?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Concisión</td>
                  <td className="border p-2">¿Facilita la apropiación y ajuste del aprendizaje?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Legibilidad</td>
                  <td className="border p-2">¿Tipografías legibles y ajustables?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Estructuración</td>
                  <td className="border p-2">¿Permite la facilidad de navegación entre módulos?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Escalabilidad</td>
                  <td className="border p-2">¿Es ajustable en su escala de presentación?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Resultados de la Evaluación</CardTitle>
          <CardDescription>Puntajes obtenidos por característica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Características de Alto Nivel</th>
                  <th className="border p-2 text-left">Puntaje Obtenido</th>
                  <th className="border p-2 text-left">Puntaje Escala</th>
                  <th className="border p-2 text-left">Total Nivel</th>
                  <th className="border p-2 text-left">Puntaje Nivel</th>
                  <th className="border p-2 text-left">Total Evaluación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Utilidad General
                  </td>
                  <td className="border p-2">2.5</td>
                  <td className="border p-2">6.3</td>
                  <td className="border p-2">6.3</td>
                  <td className="border p-2" rowSpan={3}>
                    93.8
                  </td>
                  <td className="border p-2" rowSpan={3}>
                    93.8
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">2.8</td>
                  <td className="border p-2">6.9</td>
                  <td className="border p-2" rowSpan={2}>
                    53.8
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">3.5</td>
                  <td className="border p-2">33.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <ChartComponent
          title="Puntajes por Característica"
          description="Comparación de puntajes obtenidos vs. máximos por característica"
          type="bar"
          data={caracteristicasData}
          maxValue={60}
        />

        <ChartComponent
          title="Distribución de Puntajes"
          description="Distribución porcentual del puntaje total"
          type="pie"
          data={resultadoFinalData}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <ChartComponent
          title="Características Primitivas"
          description="Valoración de las características primitivas principales"
          type="radar"
          data={caracteristicasPrimitivasData}
          maxValue={5}
        />

        <ChartComponent
          title="Comparación de Características"
          description="Porcentaje de cumplimiento por característica"
          type="bar"
          data={comparacionData}
          maxValue={100}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análisis de Resultados</CardTitle>
          <CardDescription>Puntaje final obtenido: 93.8/100 (93.8%)</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            La evaluación del sitio web de Pollo Frisby utilizando el modelo Boehm muestra un rendimiento excepcional
            con un puntaje total de 93.8%. A continuación se presentan las principales conclusiones:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fortalezas:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Desempeño sobresaliente en <strong>Mantenibilidad</strong> (100%), destacando en todas sus
                  características primitivas.
                </li>
                <li>
                  Excelente rendimiento en <strong>Utilidad</strong> (89.7%), con puntuaciones altas en Fiabilidad y
                  Eficiencia.
                </li>
                <li>
                  Las características primitivas de Facilidad de Prueba, Facilidad de Entendimiento y Modificabilidad
                  obtuvieron la puntuación máxima.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Áreas de mejora:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  La <strong>Portabilidad</strong> muestra el rendimiento más bajo (63%), aunque sigue siendo
                  satisfactorio.
                </li>
                <li>La Auto-contención podría mejorarse para permitir un mejor funcionamiento offline.</li>
                <li>Algunos aspectos de Accesibilidad para usuarios con limitaciones requieren atención.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Recomendaciones:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mejorar las capacidades offline del sitio web para aumentar la portabilidad.</li>
                <li>Implementar características de accesibilidad adicionales para usuarios con limitaciones.</li>
                <li>
                  Mantener las excelentes prácticas en mantenibilidad y utilidad que contribuyen significativamente a la
                  alta calidad general.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

