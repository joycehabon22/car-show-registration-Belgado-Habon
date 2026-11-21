import { ChevronLeft, ChevronRight } from "lucide-react";
export default Pagination;
export function Pagination({
  page,
  pageSize,
  totalCount,
  totalPages,
  onPageChange,
  onPageSizeChange,
  isLoading,
}) {
  if (totalCount === 0) return null;

  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalCount);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-sm">
      <div className="text-slate-300 text-xs sm:text-sm">
        Showing <span className="font-semibold text-white">{startItem}</span> to{" "}
        <span className="font-semibold text-white">{endItem}</span> of{" "}
        <span className="font-semibold text-white">{totalCount}</span> registrations
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="text-slate-300">Per page:</span>
        <select
          value
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          disabled={isLoading}
          className="bg-slate-900/60 border border-white/20 rounded-lg px-2.5 py-1 text-white focus:outline-none cursor-pointer"
        >
          <option value={5} className="bg-slate-900">5</option>
          <option value={10} className="bg-slate-900">10</option>
          <option value={20} className="bg-slate-900">20</option>
        </select>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled
          className="p-2 rounded-xl bg-slate-900/40 border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
          title="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="px-3 py-1 text-xs font-semibold text-slate-200">
        </span>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages || isLoading}
          className="p-2 rounded-xl bg-slate-900/40 border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
          title="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}