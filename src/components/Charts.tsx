import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  ScatterChart, Scatter, ReferenceLine, ZAxis,
  PieChart, Pie, Legend
} from 'recharts'

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface CityData {
  name: string
  value: number
}

interface Props {
  data: CityData[]
  title: string
  analysis: string
}

interface ScatterPoint {
  neighbourhood: string
  price: number
  reviews: number
  city: string
}

interface ScatterProps {
  data: ScatterPoint[]
  title: string
  analysis: string
}

interface BarHorizontalPoint {
  neighbourhood: string
  price: number
}

interface HorizontalProps {
  data: BarHorizontalPoint[]
  title: string
  threshold?: number
}

interface DonutData {
  name: string
  value: number
}

interface DonutProps {
  data: DonutData[]
  title: string
  subtitle?: string
  analysis: string
}

// ─── Colores ─────────────────────────────────────────────────────────────────

const COLORS = ['#E8622A', '#E8956A', '#8FA882', '#7A9E6E', '#6BB5A0', '#4A9E8A']

// ─── Tooltips ────────────────────────────────────────────────────────────────

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
        <p className="text-lg font-semibold tracking-wide text-gray-100 border-b border-gray-700 pb-3 mb-4">{label}</p>
        <p className="text-orange-400">Precio medio: <span className="font-bold">€{payload[0].value}</span></p>
      </div>
    )
  }
  return null
}

function ScatterTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const d = payload[0].payload
    return (
      <div className="bg-gray-800 border border-teal-500/30 rounded-lg p-3 shadow-lg">
        <p className="text-teal-400 font-semibold">{d.neighbourhood}</p>
        <p className="text-gray-300 text-sm">Precio medio: <span className="text-white font-bold">€{d.price}</span></p>
        <p className="text-gray-300 text-sm">Reseñas: <span className="text-white font-bold">{d.reviews}</span></p>
        <p className="text-gray-400 text-xs mt-1">{d.city}</p>
      </div>
    )
  }
  return null
}

// ─── Gráfico 1: Barras verticales por ciudad ─────────────────────────────────

export function CityBarChart({ data, title, analysis }: Props) {
  return (
    <div className="flex flex-col gap-4 max-w-5xl">  {/* ← flex-col en vez de flex */}
      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-lg font-semibold tracking-wide text-gray-100 border-b border-gray-700 pb-3 mb-4">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="name" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
            <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Análisis debajo */}
      <div className="bg-gray-900 rounded-xl p-6">
        <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3"> Análisis</h4>
        <p className="text-gray-200 text-sm leading-relaxed">{analysis}</p>
      </div>
    </div>
  )
}

// ─── Gráfico 2: Scatter por barrio ───────────────────────────────────────────

export function NeighbourhoodScatter({ data, title, analysis }: ScatterProps) {
  return (
    <div className="flex flex-col gap-4 max-w-5xl">
      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-lg font-semibold tracking-wide text-gray-100 border-b border-gray-700 pb-3 mb-4">{title}</h3>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F3A3A" />
            <XAxis
              type="number" dataKey="price" name="Precio"
              stroke="#4ADECC" tick={{ fontSize: 11, fill: '#9CA3AF' }}
              label={{ value: 'Promedio de price', position: 'insideBottom', offset: -10, fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 500]}
            />
            <YAxis
              type="number" dataKey="reviews" name="Reseñas"
              stroke="#4ADECC" tick={{ fontSize: 11, fill: '#9CA3AF' }}
              label={{ value: 'Promedio de number_of_reviews', angle: -90, position: 'insideLeft', fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 120]}
            />
            <ZAxis range={[40, 40]} />
            <Tooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <ReferenceLine y={20} stroke="#3B82F6" strokeDasharray="4 4" strokeWidth={1} />
            <Scatter data={data} fill="#2DD4BF" fillOpacity={0.8} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Análisis debajo */}
      <div className="bg-gray-900 rounded-xl p-6">
        <h4 className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3"> Análisis</h4>
        <p className="text-gray-200 text-sm leading-relaxed">{analysis}</p>
      </div>
    </div>
  )
}

// ─── Gráfico 3: Barras horizontales por barrio ───────────────────────────────

export function NeighbourhoodHorizontalBar({ data, title, threshold = 300 }: HorizontalProps) {
  const sorted = [...data].sort((a, b) => b.price - a.price)

  return (
    <div className="bg-gray-900 rounded-xl p-6 max-w-5xl">
      <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={sorted.length * 28}>
        <BarChart data={sorted} layout="vertical" margin={{ top: 0, right: 60, left: 140, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
          <XAxis
            type="number" stroke="#9CA3AF" tick={{ fontSize: 11, fill: '#9CA3AF' }}
            label={{ value: 'Promedio de price', position: 'insideBottom', offset: -10, fill: '#9CA3AF', fontSize: 12 }}
          />
          <YAxis
            type="category" dataKey="neighbourhood"
            stroke="#9CA3AF" tick={{ fontSize: 11, fill: '#9CA3AF' }}
            width={135}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            formatter={(value: any) => [`$${value}`, 'Precio medio']}
          />
          <Bar dataKey="price" radius={[0, 4, 4, 0]}>
            {sorted.map((entry, index) => (
              <Cell key={index} fill={entry.price >= threshold ? '#3B82F6' : '#F97316'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const DONUT_COLORS = ['#2DD4BF', '#0F766E']

export function DonutChart({ data, title, subtitle, analysis }: DonutProps) {
  const total = data.reduce((a, b) => a + b.value, 0)

  return (
    <div className="flex flex-col gap-4 max-w-5xl">
      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-lg font-semibold tracking-wide text-gray-100 border-b border-gray-700 pb-3 mb-2">{title}</h3>
        {subtitle && <p className="text-teal-400 text-sm mb-4">{subtitle}</p>}
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={150}
              dataKey="value"
              label={({ name, value }) => `${value.toLocaleString()} (${((value / total) * 100).toFixed(2)}%)`}
              labelLine={true}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={DONUT_COLORS[index % DONUT_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: any) => [value.toLocaleString(), '']}
            />
            <Legend
              formatter={(value) => <span style={{ color: '#9CA3AF' }}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-gray-900 rounded-xl p-6">
        <h4 className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">📊 Análisis</h4>
        <p className="text-gray-200 text-sm leading-relaxed">{analysis}</p>
      </div>
    </div>
  )
}