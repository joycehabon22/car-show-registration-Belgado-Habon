import KpiCard from './KpiCard';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(amount ?? 0);

export default function KpiCards({ summary, loading }) {
  const collectionRate =
    summary && summary.totalFees > 0
      ? ((summary.totalPayments / summary.totalFees) * 100).toFixed(1)
      : '0.0';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <KpiCard
        title="Total Registrations"
        value={summary?.totalRegistrations ?? 0}
        subtitle={`${summary?.pending ?? 0} pending · ${summary?.cancelled ?? 0} cancelled`}
        accentColor="border-slate-200"
        loading={loading}
      />
      <KpiCard
        title="Total Payments"
        value={formatCurrency(summary?.totalPayments)}
        subtitle={`Out of ${formatCurrency(summary?.totalFees)}`}
        accentColor="border-emerald-200"
        loading={loading}
      />
      <KpiCard
        title="Uncollected"
        value={formatCurrency(summary?.uncollectedPayments)}
        subtitle="Remaining balance"
        accentColor="border-amber-200"
        loading={loading}
      />
      <KpiCard
        title="Confirmed"
        value={summary?.confirmed ?? 0}
        subtitle="Ready for event"
        accentColor="border-blue-200"
        loading={loading}
      />
      <KpiCard
        title="Checked In"
        value={summary?.checkedIn ?? 0}
        subtitle="Arrived at coliseum"
        accentColor="border-indigo-200"
        loading={loading}
      />
      <KpiCard
        title="Collection Rate"
        value={`${collectionRate}%`}
        subtitle="Active registrations"
        accentColor="border-slate-200"
        loading={loading}
      />
    </div>
  );
}