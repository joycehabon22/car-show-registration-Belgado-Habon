import { Search, RotateCcw, Filter } from "lucide-react";
export default RegistrationFilters;
export function RegistrationFilters({
  searchTerm,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  onClearFilters,
}) {
  const hasActiveFilters = searchTerm || selectedType || selectedStatus;
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-between text-white">
      {/* Search Input */}
      <div className="relative w-full md:w-80">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-300">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search participant name..."
          className="w-full pl-10 pr-4 py-2.5 bg-slate-900/40 border border-white/15 rounded-xl text-sm placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <div className="flex items-center gap-2 bg-slate-900/40 border border-white/15 rounded-xl px-3 py-2 text-sm">
          <Filter className="w-4 h-4 text-indigo-400" />
          <span className="text-slate-300 text-xs uppercase tracking-wider font-semibold">Type:</span>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="bg-transparent text-white focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-slate-900 text-white">All Types</option>
            <option value="Exhibitor" className="bg-slate-900 text-white">Exhibitor</option>
            <option value="Competitor" className="bg-slate-900 text-white">Competitor</option>
            <option value="VIP" className="bg-slate-900 text-white">VIP</option>
          </select>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/40 border border-white/15 rounded-xl px-3 py-2 text-sm">
          <span className="text-slate-300 text-xs uppercase tracking-wider font-semibold">Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="bg-transparent text-white focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-slate-900 text-white">All Statuses</option>
            <option value="Pending" className="bg-slate-900 text-white">Pending</option>
            <option value="Confirmed" className="bg-slate-900 text-white">Confirmed</option>
            <option value="CheckedIn" className="bg-slate-900 text-white">Checked In</option>
            <option value="Cancelled" className="bg-slate-900 text-white">Cancelled</option>
          </select>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
}