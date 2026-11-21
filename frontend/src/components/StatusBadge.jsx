const STATUS_STYLES = {
  Pending: 'bg-slate-100 text-slate-700 border-slate-300',
  Confirmed: 'bg-blue-50 text-blue-700 border-blue-200',
  CheckedIn: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Cancelled: 'bg-rose-50 text-rose-700 border-rose-200'
};

const STATUS_LABELS = {
  Pending: 'Pending',
  Confirmed: 'Confirmed',
  CheckedIn: 'Checked In',
  Cancelled: 'Cancelled'
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || 'bg-slate-100 text-slate-700 border-slate-200';
  const label = STATUS_LABELS[status] || status;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${style}`}>
      {label}
    </span>
  );
}