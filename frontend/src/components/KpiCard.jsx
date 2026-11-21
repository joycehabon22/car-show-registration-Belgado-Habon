export default function KpiCard({ title, value, subtitle, accentColor = 'border-slate-200', loading = false }) {
  return (
    <div className={`bg-white rounded-xl border ${accentColor} p-5 shadow-xs transition-shadow hover:shadow-md`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
      {loading ? (
        <div className="mt-2 h-8 w-28 bg-slate-200 animate-pulse rounded" />
      ) : (
        <p className="mt-2 text-2xl font-bold text-slate-900 tabular-nums">{value}</p>
      )}
      {subtitle && <p className="mt-1 text-xs text-slate-400">{subtitle}</p>}
    </div>
  );
}