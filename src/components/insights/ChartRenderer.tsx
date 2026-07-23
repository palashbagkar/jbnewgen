'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

/** Renders a CMS "chart" block. Data shape: [{ label, value }, ...]. */
type Row = { label?: string; value?: number }
type Props = { kind?: string; title?: string; caption?: string; data?: unknown }

const FLAME = 'var(--color-flame-500, #e8622a)'
const PIE_COLORS = [
  'var(--color-flame-500, #e8622a)',
  'var(--color-flame-400, #f3894f)',
  'var(--color-flame-600, #c14f1f)',
  'var(--color-ink-400, #64748b)',
  'var(--color-ink-300, #94a3b8)',
]

export function ChartRenderer({ kind = 'bar', title, caption, data }: Props) {
  const rows: Row[] = Array.isArray(data) ? (data as Row[]) : []

  const grid = (
    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-ink-100, #e2e8f0)" vertical={false} />
  )
  const axes = (
    <>
      <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="var(--color-ink-400, #64748b)" />
      <YAxis tick={{ fontSize: 12 }} width={36} stroke="var(--color-ink-400, #64748b)" />
      <Tooltip />
    </>
  )

  let chart: React.ReactElement
  if (kind === 'line') {
    chart = (
      <LineChart data={rows}>
        {grid}
        {axes}
        <Line type="monotone" dataKey="value" stroke={FLAME} strokeWidth={2} dot={false} />
      </LineChart>
    )
  } else if (kind === 'area') {
    chart = (
      <AreaChart data={rows}>
        {grid}
        {axes}
        <Area type="monotone" dataKey="value" stroke={FLAME} fill={FLAME} fillOpacity={0.15} />
      </AreaChart>
    )
  } else if (kind === 'pie') {
    chart = (
      <PieChart>
        <Tooltip />
        <Pie data={rows} dataKey="value" nameKey="label" innerRadius={50} outerRadius={92} paddingAngle={2}>
          {rows.map((_, i) => (
            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )
  } else {
    chart = (
      <BarChart data={rows}>
        {grid}
        {axes}
        <Bar dataKey="value" fill={FLAME} radius={[4, 4, 0, 0]} />
      </BarChart>
    )
  }

  return (
    <figure className="my-8">
      {title && <figcaption className="mb-3 text-sm font-semibold text-ink-800">{title}</figcaption>}
      <div className="h-72 w-full rounded-2xl border border-ink-100 bg-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          {chart}
        </ResponsiveContainer>
      </div>
      {caption && <figcaption className="mt-2 text-xs text-ink-400">{caption}</figcaption>}
    </figure>
  )
}
