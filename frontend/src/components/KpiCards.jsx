import { Users, Wallet, AlertCircle, CheckCircle2, UserCheck, Percent } from 'lucide-react';
import { KpiCard } from './KpiCard';
export default KpiCards;

const formatPhp = (amount) =>
  new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(amount || 0);

export function KpiCards({ summary, isLoading }) {
  if (isLoading || !summary) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-28 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 animate-pulse"
          />
        ))}
      </div>
    );
  }

  const collectionRate =
    summary.totalFees > 0 ? ((summary.totalPayments / summary.totalFees) * 100).toFixed(1) : '0.0';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <KpiCard
        title="Total Registrations"
        value={summary.totalRegistrations}
        subtitle={`${summary.pending} pending`}
        icon={Users}
        accent="cyan"
      />
      <KpiCard
        title="Total Payments"
        value={formatPhp(summary.totalPayments)}
        subtitle="Collected fees"
        icon={Wallet}
        accent="emerald"
      />
      <KpiCard
        title="Uncollected"
        value={formatPhp(summary.uncollectedPayments)}
        subtitle="Remaining balance"
        icon={AlertCircle}
        accent="amber"
      />
      <KpiCard
        title="Confirmed"
        value={summary.confirmed}
        subtitle="Approved entries"
        icon={CheckCircle2}
        accent="cyan"
      />
      <KpiCard
        title="Checked In"
        value={summary.checkedIn}
        subtitle="At Coliseum"
        icon={UserCheck}
        accent="emerald"
      />
      <KpiCard
        title="Collection Rate"
        value={`${collectionRate}%`}
        subtitle={`of ${formatPhp(summary.totalFees)}`}
        icon={Percent}
        accent="indigo"
      />
    </div>
    
  );
}