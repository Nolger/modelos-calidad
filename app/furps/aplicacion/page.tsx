import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartComponent } from "@/components/chart-component"

export default function FurpsAplicacionPage() {
  // Datos para las gráficas
  const caracteristicasData = [
    { name: "Funcionalidad (F)", value: 22.5, fullMark: 30, percentage: 75.0, color: "#3b82f6" },
    { name: "Usabilidad (U)", value: 17.5, fullMark: 20, percentage: 87.5, color: "#10b981" },
    { name: "Confiabilidad (R)", value: 12.5, fullMark: 15, percentage: 83.3, color: "#f59e0b" },
    { name: "Rendimiento (P)", value: 18.8, fullMark: 20, percentage: 94.0, color: "#ef4444" },
    { name: "Soporte (S)", value: 13.5, fullMark: 15, percentage: 90.0, color: "#8b5cf6" },
  ]

  const factoresData = [
    { name: "Características del programa", value: 7.5, fullMark: 10, percentage: 75.0, color: "#3b82f6" },
    { name: "Generalidad de funciones", value: 7.5, fullMark: 10, percentage: 75.0, color: "#60a5fa" },
    { name: "Seguridad del Sistema", value: 7.5, fullMark: 10, percentage: 75.0, color: "#93c5fd" },
    { name: "Capacidad de Prueba", value: 3.8, fullMark: 5, percentage: 76.0, color: "#10b981" },
    { name: "Capacidad de configuración", value: 3.8, fullMark: 5, percentage: 76.0, color: "#34d399" },
    { name: "Compatibilidad", value: 5.0, fullMark: 5, percentage: 100.0, color: "#6ee7b7" },
    { name: "Requisitos de instalación", value: 5.0, fullMark: 5, percentage: 100.0, color: "#a7f3d0" },
  ]

  const resultadoFinalData = [
    { name: "Puntaje Obtenido", value: 84.8, color: "#f59e0b" },
    { name: "Puntaje Restante", value: 15.2, color: "#e5e7eb" },
  ]

  const comparacionModelosData = [
    { name: "McCall", value: 76.4, percentage: 76.4, color: "#3b82f6" },
    { name: "Boehm", value: 93.8, percentage: 93.8, color: "#10b981" },
    { name: "FURPS", value: 84.8, percentage: 84.8, color: "#f59e0b" },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Modelo de Calidad FURPS - Aplicación</h1>

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
          <CardTitle>Estructura del Modelo FURPS</CardTitle>
          <CardDescription>Distribución de puntajes por característica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
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
                    F - Funcionalidad
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
                    U - Facilidad de Uso
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
                    R - Confiabilidad
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
                    P - Rendimiento
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
                    S - Soporte
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
                <tr className="bg-muted font-semibold">
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

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cuestionario de Evaluación</CardTitle>
          <CardDescription>Preguntas aplicadas para evaluar cada factor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Características</th>
                  <th className="border p-2 text-left">Factor</th>
                  <th className="border p-2 text-left">Preguntas</th>
                  <th className="border p-2 text-left">Valoración Esperada</th>
                  <th className="border p-2 text-left">Valoración Obtenida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    F - Funcionalidad
                  </td>
                  <td className="border p-2">Características y capacidades del programa</td>
                  <td className="border p-2">
                    ¿La plataforma ofrece todas las funcionalidades necesarias para realizar pedidos en línea?
                  </td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Generalidad de las funciones</td>
                  <td className="border p-2">
                    ¿Las funciones son aplicables a diferentes tipos de usuarios y necesidades?
                  </td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Seguridad del Sistema</td>
                  <td className="border p-2">
                    ¿La plataforma protege adecuadamente los datos del usuario y las transacciones?
                  </td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    U - Facilidad de Uso
                  </td>
                  <td className="border p-2">Capacidad de Prueba</td>
                  <td className="border p-2">
                    ¿Es posible verificar fácilmente el funcionamiento de las diferentes funciones?
                  </td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de configuración</td>
                  <td className="border p-2">¿El usuario puede personalizar aspectos de la interfaz o preferencias?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Regular</td>
                </tr>
                <tr>
                  <td className="border p-2">Compatibilidad</td>
                  <td className="border p-2">
                    ¿La plataforma funciona correctamente en diferentes navegadores y dispositivos?
                  </td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Requisitos de instalación</td>
                  <td className="border p-2">
                    ¿La plataforma requiere instalaciones o configuraciones adicionales para su uso?
                  </td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    R - Confiabilidad
                  </td>
                  <td className="border p-2">Frecuencia y severidad de fallos</td>
                  <td className="border p-2">¿Con qué frecuencia se presentan errores o fallos en la plataforma?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Exactitud de las salidas</td>
                  <td className="border p-2">¿Los resultados de las operaciones (pedidos, cálculos) son precisos?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de predicción</td>
                  <td className="border p-2">¿El comportamiento del sistema es predecible y consistente?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    P - Rendimiento
                  </td>
                  <td className="border p-2">Factores Humanos</td>
                  <td className="border p-2">
                    ¿La interfaz es intuitiva y fácil de usar para diferentes tipos de usuarios?
                  </td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Factores Estéticos</td>
                  <td className="border p-2">¿El diseño visual es atractivo y profesional?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia de la interfaz</td>
                  <td className="border p-2">
                    ¿La interfaz mantiene un diseño y comportamiento consistente en todas las secciones?
                  </td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Documentación</td>
                  <td className="border p-2">¿Existe documentación o ayuda adecuada para el usuario?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={5}>
                    S - Soporte
                  </td>
                  <td className="border p-2">Velocidad de procesamiento</td>
                  <td className="border p-2">¿Las operaciones se realizan con rapidez?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Tiempo de respuesta</td>
                  <td className="border p-2">¿El tiempo de respuesta es adecuado para las diferentes operaciones?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Consumo de recursos</td>
                  <td className="border p-2">¿La plataforma hace un uso eficiente de los recursos del sistema?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Rendimiento efectivo total</td>
                  <td className="border p-2">¿El rendimiento general de la plataforma es satisfactorio?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficacia</td>
                  <td className="border p-2">¿La plataforma cumple eficazmente con su propósito principal?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Aplicación de la Evaluación</CardTitle>
          <CardDescription>Valoración de cada factor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Características</th>
                  <th className="border p-2 text-left">Factor</th>
                  <th className="border p-2 text-center" colSpan={4}>
                    Valoración
                  </th>
                </tr>
                <tr className="bg-muted">
                  <th className="border p-2 text-left" colSpan={2}></th>
                  <th className="border p-2 text-center">1</th>
                  <th className="border p-2 text-center">2</th>
                  <th className="border p-2 text-center">3</th>
                  <th className="border p-2 text-center">4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Funcionalidad (F)
                  </td>
                  <td className="border p-2">Características y capacidades del programa</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Generalidad de las funciones</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Seguridad del Sistema</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Facilidad de Uso (U)
                  </td>
                  <td className="border p-2">Capacidad de Prueba</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de configuración</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Compatibilidad</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Requisitos de instalación</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Confiabilidad (R)
                  </td>
                  <td className="border p-2">Frecuencia y severidad de fallos</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Exactitud de las salidas</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de predicción</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Rendimiento (P)
                  </td>
                  <td className="border p-2">Factores Humanos</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Factores Estéticos</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia de la interfaz</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Documentación</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={5}>
                    Soporte (S)
                  </td>
                  <td className="border p-2">Velocidad de procesamiento</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Tiempo de respuesta</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Consumo de recursos</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Rendimiento efectivo total</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficacia</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
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
                  <th className="border p-2 text-left">Características</th>
                  <th className="border p-2 text-left">Factor</th>
                  <th className="border p-2 text-left">Valoración</th>
                  <th className="border p-2 text-left">Puntaje</th>
                  <th className="border p-2 text-left">Punt. Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Funcionalidad (F)
                  </td>
                  <td className="border p-2">Características y capacidades del programa</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">7.5</td>
                  <td className="border p-2" rowSpan={3}>
                    22.5
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Generalidad de las funciones</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">7.5</td>
                </tr>
                <tr>
                  <td className="border p-2">Seguridad del Sistema</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">7.5</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Facilidad de Uso (U)
                  </td>
                  <td className="border p-2">Capacidad de Prueba</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">3.8</td>
                  <td className="border p-2" rowSpan={4}>
                    17.5
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de configuración</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">3.8</td>
                </tr>
                <tr>
                  <td className="border p-2">Compatibilidad</td>
                  <td className="border p-2">5</td>
                  <td className="border p-2">5.0</td>
                </tr>
                <tr>
                  <td className="border p-2">Requisitos de instalación</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">5.0</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={3}>
                    Confiabilidad (R)
                  </td>
                  <td className="border p-2">Frecuencia y severidad de fallos</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">3.8</td>
                  <td className="border p-2" rowSpan={3}>
                    12.5
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Exactitud de las salidas</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">5.0</td>
                </tr>
                <tr>
                  <td className="border p-2">Capacidad de predicción</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">3.8</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={4}>
                    Rendimiento (P)
                  </td>
                  <td className="border p-2">Factores Humanos</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">3.8</td>
                  <td className="border p-2" rowSpan={4}>
                    18.8
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Factores Estéticos</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">5.0</td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia de la interfaz</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">5.0</td>
                </tr>
                <tr>
                  <td className="border p-2">Documentación</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">5.0</td>
                </tr>
                <tr>
                  <td className="border p-2" rowSpan={5}>
                    Soporte (S)
                  </td>
                  <td className="border p-2">Velocidad de procesamiento</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">2.3</td>
                  <td className="border p-2" rowSpan={5}>
                    13.5
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Tiempo de respuesta</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">2.3</td>
                </tr>
                <tr>
                  <td className="border p-2">Consumo de recursos</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">3.0</td>
                </tr>
                <tr>
                  <td className="border p-2">Rendimiento efectivo total</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">3.0</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficacia</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2">3.0</td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border p-2" colSpan={4}>
                    Puntaje Total
                  </td>
                  <td className="border p-2">84.8</td>
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
          maxValue={30}
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
          title="Factores Evaluados"
          description="Valoración de los factores principales"
          type="radar"
          data={factoresData}
          maxValue={10}
        />

        <ChartComponent
          title="Comparación entre Modelos"
          description="Puntajes obtenidos en los diferentes modelos de calidad"
          type="bar"
          data={comparacionModelosData}
          maxValue={100}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análisis de Resultados</CardTitle>
          <CardDescription>Puntaje final obtenido: 84.8/100 (84.8%)</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            La evaluación del sitio web de Pollo Frisby utilizando el modelo FURPS muestra un rendimiento muy bueno con
            un puntaje total de 84.8%. A continuación se presentan las principales conclusiones:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fortalezas:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Excelente desempeño en <strong>Rendimiento (P)</strong> (94%), destacando en factores estéticos y
                  consistencia de la interfaz.
                </li>
                <li>
                  Muy buen rendimiento en <strong>Soporte (S)</strong> (90%), con puntuaciones altas en consumo de
                  recursos y eficacia.
                </li>
                <li>
                  La <strong>Usabilidad (U)</strong> (87.5%) muestra resultados positivos, especialmente en
                  compatibilidad y requisitos de instalación.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Áreas de mejora:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  La <strong>Funcionalidad (F)</strong> (75%) es el área con mayor oportunidad de mejora, aunque sigue
                  siendo satisfactoria.
                </li>
                <li>
                  La capacidad de configuración en la Usabilidad podría mejorarse para permitir mayor personalización.
                </li>
                <li>Algunos aspectos de la frecuencia de fallos en la Confiabilidad requieren atención.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Recomendaciones:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mejorar las características y capacidades del programa para aumentar la funcionalidad general.</li>
                <li>Implementar más opciones de personalización para mejorar la capacidad de configuración.</li>
                <li>
                  Mantener las excelentes prácticas en rendimiento y soporte que contribuyen significativamente a la
                  alta calidad general.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Comparación con otros modelos</h3>
            <p>
              Al comparar los resultados obtenidos con el modelo FURPS (84.8%) con los otros modelos aplicados, se
              observa que:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                El modelo Boehm otorga la puntuación más alta (93.8%), posiblemente debido a su enfoque en la utilidad
                general y la experiencia del usuario.
              </li>
              <li>
                El modelo McCall proporciona la puntuación más baja (76.4%), probablemente por su mayor énfasis en
                aspectos técnicos y operativos.
              </li>
              <li>
                El modelo FURPS ofrece una evaluación intermedia y equilibrada, considerando tanto aspectos funcionales
                como no funcionales.
              </li>
            </ul>
            <p className="mt-2">
              Esta comparación sugiere que el sitio web de Pollo Frisby tiene un rendimiento consistentemente bueno a
              través de diferentes perspectivas de evaluación, con un promedio general de 85% entre los tres modelos.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

