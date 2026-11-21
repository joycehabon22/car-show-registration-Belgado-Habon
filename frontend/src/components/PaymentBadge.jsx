const PAYMENT_STYLES = {
  Unpaid: 'bg-red-50 text-red-700 border-red-200',
  Partial: 'bg-amber-50 text-amber-700 border-amber-200',
  Paid: 'bg-green-50 text-green-700 border-green-200'
};

export default function PaymentBadge({ status }) {
  const style = PAYMENT_STYLES[status] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style}`}>
      {status}
    </span>
  );
}