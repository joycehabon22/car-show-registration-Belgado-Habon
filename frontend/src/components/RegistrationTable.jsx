import StatusBadge from './StatusBadge';
import PaymentBadge from './PaymentBadge';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(amount ?? 0);

const formatDate = (isoString) => {
  if (!isoString) return '—';
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(isoString));
};

export default function RegistrationTable({
  items,
  loading,
  error,
  onRetry,
  onClearFilters
}) {
  if (error) {
    return (
      <div className="bg-white rounded-xl border border-red-200 p-10 text-center shadow-xs">
        <p className="text-base font-semibold text-red-700">Cannot reach the API</p>
        <p className="mt-1 text-sm text-slate-600">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!loading && items.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs">
        <p className="text-base font-semibold text-slate-800">No registrations match your filters</p>
        <p className="mt-1 text-sm text-slate-500">
          Try adjusting your search keywords or resetting the active filters.
        </p>
        <button
          type="button"
          onClick={onClearFilters}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <th className="py-3.5 px-4">Registration No.</th>
              <th className="py-3.5 px-4">Date</th>
              <th className="py-3.5 px-4">Participant</th>
              <th className="py-3.5 px-4">Vehicle</th>
              <th className="py-3.5 px-4">Type</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4 text-right">Fee / Paid</th>
              <th className="py-3.5 px-4">Payment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
            {loading ? (
              Array.from({ length: 5 }).map((_, idx) => (
                <tr key={idx} className="animate-pulse">
                  <td className="py-4 px-4"><div className="h-4 w-20 bg-slate-200 rounded" /></td>
                  <td className="py-4 px-4"><div className="h-4 w-32 bg-slate-200 rounded" /></td>
                  <td className="py-4 px-4">
                    <div className="h-4 w-36 bg-slate-200 rounded mb-1.5" />
                    <div className="h-3 w-28 bg-slate-100 rounded" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="h-4 w-36 bg-slate-200 rounded mb-1.5" />
                    <div className="h-3 w-20 bg-slate-100 rounded" />
                  </td>
                  <td className="py-4 px-4"><div className="h-4 w-20 bg-slate-200 rounded" /></td>
                  <td className="py-4 px-4"><div className="h-5 w-20 bg-slate-200 rounded-full" /></td>
                  <td className="py-4 px-4"><div className="h-4 w-28 bg-slate-200 rounded ml-auto" /></td>
                  <td className="py-4 px-4"><div className="h-5 w-16 bg-slate-200 rounded-full" /></td>
                </tr>
              ))
            ) : (
              items.map((reg) => (
                <tr key={reg.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-900 whitespace-nowrap">
                    {reg.registrationNumber}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                    {formatDate(reg.registrationDate)}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-slate-900">{reg.participantName}</div>
                    <div className="text-xs text-slate-500">
                      {reg.contactNumber} · {reg.email}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-slate-800">{reg.carMakeModel}</div>
                    <div className="text-xs font-mono text-slate-500">{reg.plateNumber}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium whitespace-nowrap">
                    {reg.registrationType}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <StatusBadge status={reg.status} />
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono whitespace-nowrap tabular-nums">
                    <span className="text-slate-500">{formatCurrency(reg.registrationFee)}</span>
                    <span className="text-slate-400 mx-1">/</span>
                    <span className="font-semibold text-slate-900">{formatCurrency(reg.amountPaid)}</span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <PaymentBadge status={reg.paymentStatus} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}