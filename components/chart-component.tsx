"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface ChartData {
  name: string
  value: number
  fullMark?: number
  color?: string
}

interface BarChartData {
  name: string
  value: number
  percentage: number
  color?: string
}

interface LineChartData {
  name: string
  value: number
}

interface ChartComponentProps {
  title: string
  description?: string
  type: "bar" | "pie" | "radar" | "line"
  data: ChartData[] | BarChartData[] | LineChartData[]
  colors?: string[]
  maxValue?: number
}

export function ChartComponent({
  title,
  description,
  type,
  data,
  colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"],
  maxValue = 100,
}: ChartComponentProps) {
  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data as BarChartData[]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, maxValue]} />
              <Tooltip formatter={(value: number) => [`${value}`, "Valor"]} labelFormatter={(label) => `${label}`} />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                {(data as BarChartData[]).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value}`, "Valor"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )

      case "radar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis domain={[0, maxValue]} />
              <Radar name="Valores" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              {(data as ChartData[]).some((d) => d.fullMark) && (
                <Radar name="Valor Máximo" dataKey="fullMark" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} />
              )}
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        )

      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, maxValue]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" activeDot={{ r: 8 }} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )

      default:
        return null
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{renderChart()}</CardContent>
    </Card>
  )
}

