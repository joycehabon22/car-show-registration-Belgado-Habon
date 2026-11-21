import { StatusBadge } from "./StatusBadge";
import { PaymentBadge } from "./PaymentBadge";
import { Car, Mail, Phone, Calendar } from "lucide-react";
export default RegistrationTable;

const formatPhp = (amount) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(amount ?? 0);

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const TYPE_STYLES = {
  Exhibitor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Competitor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  VIP: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export function RegistrationTable({ registrations, isLoading, onSelectRow }) {
  if (isLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center text-slate-300 shadow-2xl animate-pulse">
        <p className="text-sm font-medium">Loading registrations from API...</p>
      </div>
    );
  }

  if (!registrations || registrations.length === 0) {
    return null; 
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-white">
          <thead>
            <tr className="border-b border-white/15 bg-white/5 text-xs uppercase tracking-wider text-slate-300">
              <th className="py-4 px-6 font-semibold">Reg. No.</th>
              <th className="py-4 px-6 font-semibold">Date</th>
              <th className="py-4 px-6 font-semibold">Participant</th>
              <th className="py-4 px-6 font-semibold">Car & Plate</th>
              <th className="py-4 px-6 font-semibold">Type</th>
              <th className="py-4 px-6 font-semibold text-right">Fee / Paid</th>
              <th className="py-4 px-6 font-semibold text-center">Payment</th>
              <th className="py-4 px-6 font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-sm">
            {registrations.map((reg) => (
              <tr
                key={reg.id ?? reg.registrationNumber}
                onClick={() => onSelectRow && onSelectRow(reg)}
                className="hover:bg-white/5 transition cursor-pointer group"
              >
                <td className="py-4 px-6 font-mono font-semibold text-indigo-300 group-hover:text-indigo-200">
                </td>       
                <td className="py-4 px-6 text-slate-300 whitespace-nowrap text-xs">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {formatDate(reg.registrationDate)}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="font-semibold text-white">{reg.participantName}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-3 mt-0.5">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-400" /> {reg.contactNumber}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-slate-400" /> {reg.email}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="font-medium text-white flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-indigo-400 shrink-0" />
                    {reg.carMakeModel}
                  </div>
                  <div className="text-xs font-mono text-slate-300 mt-0.5 bg-slate-900/50 px-2 py-0.5 rounded border border-white/10 inline-block">
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                      TYPE_STYLES[reg.registrationType] || "bg-slate-500/20 text-slate-300 border-slate-500/30"
                    }`}
                  >
                  </span>
                </td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <div className="font-semibold text-white">{formatPhp(reg.registrationFee)}</div>
                  <div className="text-xs text-emerald-400">Paid: {formatPhp(reg.amountPaid)}</div>
                </td>
                <td className="py-4 px-6 text-center whitespace-nowrap">
                  <PaymentBadge paymentStatus={reg.paymentStatus} />
                </td>
                <td className="py-4 px-6 text-center whitespace-nowrap">
                  <StatusBadge status={reg.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}