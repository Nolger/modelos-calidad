import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartComponent } from "@/components/chart-component"

export default function McCallAplicacionPage() {
  // Datos para las gráficas
  const capacidadesData = [
    { name: "Operación", value: 32.2, fullMark: 40, percentage: 80.5, color: "#3b82f6" },
    { name: "Transición", value: 18.8, fullMark: 30, percentage: 62.7, color: "#10b981" },
    { name: "Revisión", value: 25.5, fullMark: 30, percentage: 85.0, color: "#f59e0b" },
  ]

  const factoresData = [
    { name: "Corrección", value: 8.1, fullMark: 10, percentage: 81.0, color: "#3b82f6" },
    { name: "Confiabilidad", value: 8.4, fullMark: 10, percentage: 84.0, color: "#60a5fa" },
    { name: "Usabilidad", value: 7.5, fullMark: 10, percentage: 75.0, color: "#93c5fd" },
    { name: "Integridad", value: 8.1, fullMark: 10, percentage: 81.0, color: "#bfdbfe" },
    { name: "Portabilidad", value: 3.8, fullMark: 10, percentage: 38.0, color: "#10b981" },
    { name: "Reusabilidad", value: 7.5, fullMark: 10, percentage: 75.0, color: "#34d399" },
    { name: "Interoperabilidad", value: 7.5, fullMark: 10, percentage: 75.0, color: "#6ee7b7" },
    { name: "Facilidad Mant.", value: 7.5, fullMark: 10, percentage: 75.0, color: "#f59e0b" },
    { name: "Flexibilidad", value: 8.8, fullMark: 10, percentage: 88.0, color: "#fbbf24" },
    { name: "Facilidad Prueba", value: 9.2, fullMark: 10, percentage: 92.0, color: "#fcd34d" },
  ]

  const metricasData = [
    { name: "Compleción", value: 3.0, fullMark: 4, percentage: 75.0 },
    { name: "Complejidad", value: 3.3, fullMark: 4, percentage: 82.5 },
    { name: "Concisión", value: 3.0, fullMark: 4, percentage: 75.0 },
    { name: "Consistencia", value: 3.0, fullMark: 4, percentage: 75.0 },
    { name: "Eficiencia", value: 3.6, fullMark: 4, percentage: 90.0 },
    { name: "Estandarización", value: 4.0, fullMark: 4, percentage: 100.0 },
    { name: "Exactitud", value: 4.0, fullMark: 4, percentage: 100.0 },
    { name: "Independencia", value: 2.3, fullMark: 4, percentage: 57.5 },
    { name: "Modularidad", value: 3.0, fullMark: 4, percentage: 75.0 },
    { name: "Operatividad", value: 3.0, fullMark: 4, percentage: 75.0 },
    { name: "Seguridad", value: 3.0, fullMark: 4, percentage: 75.0 },
    { name: "Simplicidad", value: 3.0, fullMark: 4, percentage: 75.0 },
  ]

  const resultadoFinalData = [
    { name: "Puntaje Obtenido", value: 76.4, color: "#3b82f6" },
    { name: "Puntaje Restante", value: 23.6, color: "#e5e7eb" },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Modelo de Calidad McCall - Aplicación</h1>

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
                  <td className="border p-2 font-semibold bg-muted">Licencia de Uso</td>
                  <td className="border p-2">Software Propietario</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold bg-muted">Área de Aplicación</td>
                  <td className="border p-2">E-commerce, pedidos en línea, servicios de comida rápida</td>
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
          <CardTitle>Escala de Valoraciones</CardTitle>
          <CardDescription>Criterios de evaluación utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Se define la tabla de valoración a tener en cuenta en el desarrollo de las evaluaciones de todos los modelos
            trabajados en el informe, la cual quedará definida así:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Descripción</th>
                  <th className="border p-2 text-left">Cuantificación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">4</td>
                </tr>
                <tr>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2">Regular</td>
                  <td className="border p-2">2</td>
                </tr>
                <tr>
                  <td className="border p-2">Malo</td>
                  <td className="border p-2">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Relación entre Factores de Calidad y Métricas</CardTitle>
          <CardDescription>Matriz de relación entre factores y métricas de calidad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left" rowSpan={2}>
                    Métricas
                  </th>
                  <th className="border p-2 text-left" rowSpan={2}>
                    Descripción
                  </th>
                  <th className="border p-2 text-center" colSpan={4}>
                    Operación
                  </th>
                  <th className="border p-2 text-center" colSpan={3}>
                    Transición
                  </th>
                  <th className="border p-2 text-center" colSpan={3}>
                    Revisión
                  </th>
                </tr>
                <tr className="bg-muted">
                  <th className="border p-2 text-center">Corrección</th>
                  <th className="border p-2 text-center">Confiabilidad</th>
                  <th className="border p-2 text-center">Usabilidad</th>
                  <th className="border p-2 text-center">Integridad o Seguridad</th>
                  <th className="border p-2 text-center">Portabilidad</th>
                  <th className="border p-2 text-center">Reusabilidad</th>
                  <th className="border p-2 text-center">Interoperabilidad</th>
                  <th className="border p-2 text-center">Facilidad Mantenimiento</th>
                  <th className="border p-2 text-center">Flexibilidad</th>
                  <th className="border p-2 text-center">Facilidad de Prueba</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Compleción de las funciones</td>
                  <td className="border p-2">Grado en que se pudieron implementar las funciones requeridas.</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Complejidad</td>
                  <td className="border p-2">Complejidad del sistema</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Concisión</td>
                  <td className="border p-2">Efectividad del recurso</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia</td>
                  <td className="border p-2">Diseño uniforme del programa empleando técnicas de documentación.</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia de ejecución</td>
                  <td className="border p-2">Rendimiento en tiempo de ejecución</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Estandarización de datos y estructuras</td>
                  <td className="border p-2">
                    Manejo de tipos de datos y estructuras uniformes a lo largo del programa
                  </td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Exactitud de cálculo y de control</td>
                  <td className="border p-2">Precisión obtenida en los cálculos</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Independencia del software</td>
                  <td className="border p-2">
                    Grado de independencia del software en relación al sistema operativo, y otras limitaciones del
                    entorno.
                  </td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Modularidad</td>
                  <td className="border p-2">Independencia funcional de los componentes.</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Operatividad</td>
                  <td className="border p-2">Facilidad de operación</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Seguridad</td>
                  <td className="border p-2">
                    Disponibilidad de elementos de protección del recurso y la información.
                  </td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Simplicidad</td>
                  <td className="border p-2">Grado de dificultad para entender el recurso</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cuestionario de Evaluación</CardTitle>
          <CardDescription>Preguntas aplicadas para evaluar cada métrica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Métricas</th>
                  <th className="border p-2 text-left">Descripción</th>
                  <th className="border p-2 text-left">Preguntas</th>
                  <th className="border p-2 text-left">Puntaje Esperado</th>
                  <th className="border p-2 text-left">Puntaje Obtenido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Compleción de las funciones</td>
                  <td className="border p-2">Grado en que se pudieron implementar las funciones requeridas.</td>
                  <td className="border p-2">
                    ¿La web aplica todas las funciones necesarias para el desarrollo del contenido educativo?
                  </td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Complejidad</td>
                  <td className="border p-2">Complejidad del sistema</td>
                  <td className="border p-2">¿La web es fácil de usar, la navegación es intuitiva y secuencial?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Concisión</td>
                  <td className="border p-2">Efectividad del recurso</td>
                  <td className="border p-2">¿El contenido cumple con el objetivo de aprendizaje?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia</td>
                  <td className="border p-2">Diseño uniforme del programa empleando técnicas de documentación.</td>
                  <td className="border p-2">
                    ¿Diseño del RED cumple con los estándares de navegación web, se puede ejecutar en cualquier
                    navegador?
                  </td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia de ejecución</td>
                  <td className="border p-2">Rendimiento en tiempo de ejecución</td>
                  <td className="border p-2">¿Es estable en la ejecución y carga de los recursos?</td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Estandarización de datos y estructuras</td>
                  <td className="border p-2">
                    Manejo de tipos de datos y estructuras uniformes a lo largo del programa
                  </td>
                  <td className="border p-2">
                    ¿Recolecta datos del proceso formativo, aplica herramientas de seguimiento?
                  </td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Exactitud de cálculo y de control</td>
                  <td className="border p-2">Precisión obtenida en los cálculos</td>
                  <td className="border p-2">
                    ¿Es efectivo en cada uno de los procesos formativos en cuanto al cálculo del área y perímetro?
                  </td>
                  <td className="border p-2">Bueno</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Independencia del software</td>
                  <td className="border p-2">
                    Grado de independencia del software en relación al sistema operativo, y otras limitaciones del
                    entorno.
                  </td>
                  <td className="border p-2">
                    ¿Es un RED independiente, se puede ejecutar en cualquier navegador, disponibilidad fuera de la red?
                  </td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Modularidad</td>
                  <td className="border p-2">Independencia funcional de los componentes.</td>
                  <td className="border p-2">
                    ¿La organización de las lecciones educativas es coherente al desarrollo del contenido?
                  </td>
                  <td className="border p-2">Buena</td>
                  <td className="border p-2">Buena</td>
                </tr>
                <tr>
                  <td className="border p-2">Operatividad</td>
                  <td className="border p-2">Facilidad de operación</td>
                  <td className="border p-2">¿El RED es fácil de usar?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Bueno</td>
                </tr>
                <tr>
                  <td className="border p-2">Seguridad</td>
                  <td className="border p-2">
                    Disponibilidad de elementos de protección del recurso y la información.
                  </td>
                  <td className="border p-2">¿Cuenta con registro de usuario, acceso y control de datos personales?</td>
                  <td className="border p-2">Excelente</td>
                  <td className="border p-2">Excelente</td>
                </tr>
                <tr>
                  <td className="border p-2">Simplicidad</td>
                  <td className="border p-2">Grado de dificultad para entender el recurso</td>
                  <td className="border p-2">
                    ¿El RED maneja un entorno que permita el desarrollo del aprendizaje de una forma clara?
                  </td>
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
          <CardTitle>Consolidación de Puntajes</CardTitle>
          <CardDescription>Puntajes asignados a cada métrica por factor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left" colSpan={2}></th>
                  <th className="border p-2 text-center" colSpan={4}>
                    Operación
                  </th>
                  <th className="border p-2 text-center" colSpan={3}>
                    Transición
                  </th>
                  <th className="border p-2 text-center" colSpan={3}>
                    Revisión
                  </th>
                </tr>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Métricas</th>
                  <th className="border p-2 text-left">Descripción</th>
                  <th className="border p-2 text-center">Corrección</th>
                  <th className="border p-2 text-center">Confiabilidad</th>
                  <th className="border p-2 text-center">Usabilidad</th>
                  <th className="border p-2 text-center">Integridad o Seguridad</th>
                  <th className="border p-2 text-center">Portabilidad</th>
                  <th className="border p-2 text-center">Reusabilidad</th>
                  <th className="border p-2 text-center">Interoperabilidad</th>
                  <th className="border p-2 text-center">Facilidad Mantenimiento</th>
                  <th className="border p-2 text-center">Flexibilidad</th>
                  <th className="border p-2 text-center">Facilidad de Prueba</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Compleción de las funciones</td>
                  <td className="border p-2">Grado en que se pudieron implementar las funciones requeridas.</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Complejidad</td>
                  <td className="border p-2">Complejidad del sistema</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">4</td>
                </tr>
                <tr>
                  <td className="border p-2">Concisión</td>
                  <td className="border p-2">Efectividad del recurso</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Consistencia</td>
                  <td className="border p-2">Diseño uniforme del programa empleando técnicas de documentación.</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Eficiencia de ejecución</td>
                  <td className="border p-2">Rendimiento en tiempo de ejecución</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">4</td>
                </tr>
                <tr>
                  <td className="border p-2">Estandarización de datos y estructuras</td>
                  <td className="border p-2">
                    Manejo de tipos de datos y estructuras uniformes a lo largo del programa
                  </td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Exactitud de cálculo y de control</td>
                  <td className="border p-2">Precisión obtenida en los cálculos</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Independencia del software</td>
                  <td className="border p-2">
                    Grado de independencia del software en relación al sistema operativo, y otras limitaciones del
                    entorno.
                  </td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center">3</td>
                </tr>
                <tr>
                  <td className="border p-2">Modularidad</td>
                  <td className="border p-2">Independencia funcional de los componentes.</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Operatividad</td>
                  <td className="border p-2">Facilidad de operación</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Seguridad</td>
                  <td className="border p-2">
                    Disponibilidad de elementos de protección del recurso y la información.
                  </td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border p-2">Simplicidad</td>
                  <td className="border p-2">Grado de dificultad para entender el recurso</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                  <td className="border p-2 text-center"></td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border p-2" colSpan={2}>
                    Puntaje Promedio de Cada Factor
                  </td>
                  <td className="border p-2 text-center">3.3</td>
                  <td className="border p-2 text-center">3.4</td>
                  <td className="border p-2 text-center">3.0</td>
                  <td className="border p-2 text-center">3.3</td>
                  <td className="border p-2 text-center">1.5</td>
                  <td className="border p-2 text-center">3.0</td>
                  <td className="border p-2 text-center">3.0</td>
                  <td className="border p-2 text-center">3.0</td>
                  <td className="border p-2 text-center">3.5</td>
                  <td className="border p-2 text-center">3.7</td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border p-2" colSpan={2}>
                    Puntaje Escala de Cada Factor
                  </td>
                  <td className="border p-2 text-center">8.1</td>
                  <td className="border p-2 text-center">8.4</td>
                  <td className="border p-2 text-center">7.5</td>
                  <td className="border p-2 text-center">8.1</td>
                  <td className="border p-2 text-center">3.8</td>
                  <td className="border p-2 text-center">7.5</td>
                  <td className="border p-2 text-center">7.5</td>
                  <td className="border p-2 text-center">7.5</td>
                  <td className="border p-2 text-center">8.8</td>
                  <td className="border p-2 text-center">9.2</td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border p-2" colSpan={2}>
                    Promedio Obtenido por Capacidad
                  </td>
                  <td className="border p-2 text-center" colSpan={4}>
                    8.0
                  </td>
                  <td className="border p-2 text-center" colSpan={3}>
                    6.3
                  </td>
                  <td className="border p-2 text-center" colSpan={3}>
                    8.5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <ChartComponent
          title="Puntajes por Capacidad"
          description="Comparación de puntajes obtenidos vs. máximos por capacidad"
          type="bar"
          data={capacidadesData}
          maxValue={40}
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
          title="Factores de Calidad"
          description="Puntajes obtenidos en cada factor de calidad"
          type="radar"
          data={factoresData}
          maxValue={10}
        />

        <ChartComponent
          title="Métricas Evaluadas"
          description="Valoración de las métricas principales"
          type="bar"
          data={metricasData}
          maxValue={4}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resultados de la Evaluación</CardTitle>
          <CardDescription>Puntaje final obtenido: 76.4/100 (76.4%)</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            La evaluación del sitio web de Pollo Frisby utilizando el modelo McCall muestra un rendimiento general
            satisfactorio con un puntaje total de 76.4%. A continuación se presentan las principales conclusiones:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fortalezas:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Excelente desempeño en la capacidad de <strong>Revisión</strong> (85%), especialmente en Facilidad de
                  Prueba (9.2/10).
                </li>
                <li>
                  Buen rendimiento en la capacidad de <strong>Operación</strong> (80.5%), con puntuaciones altas en
                  Confiabilidad (8.4/10).
                </li>
                <li>
                  Las métricas de Exactitud de cálculo, Estandarización de datos y Eficiencia de ejecución obtuvieron
                  valoraciones sobresalientes.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Áreas de mejora:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  La capacidad de <strong>Transición</strong> muestra el rendimiento más bajo (62.7%), principalmente
                  debido a la baja puntuación en Portabilidad (3.8/10).
                </li>
                <li>
                  La Independencia del software y la Eficiencia de ejecución en entornos diversos requieren atención.
                </li>
                <li>
                  La Usabilidad (7.5/10) podría mejorarse para proporcionar una experiencia de usuario más intuitiva.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Recomendaciones:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Mejorar la portabilidad del sitio web para garantizar un rendimiento óptimo en diferentes dispositivos
                  y navegadores.
                </li>
                <li>
                  Optimizar la usabilidad mediante mejoras en la interfaz de usuario y la experiencia de navegación.
                </li>
                <li>
                  Mantener las fortalezas en confiabilidad y facilidad de prueba que contribuyen significativamente a la
                  calidad general.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

