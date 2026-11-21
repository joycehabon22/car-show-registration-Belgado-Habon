export default function Pagination({
  page,
  pageSize,
  totalCount,
  totalPages,
  loading,
  onPageChange,
  onPageSizeChange
}) {
  if (totalCount === 0) return null;

  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalCount);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4 text-sm text-slate-600">
        <span>
          Showing <strong className="font-semibold text-slate-900">{startItem}–{endItem}</strong> of{' '}
          <strong className="font-semibold text-slate-900">{totalCount}</strong>
        </span>

        <div className="flex items-center gap-2">
          <label htmlFor="page-size" className="text-xs text-slate-500">
            Rows:
          </label>
          <select
            id="page-size"
            value={pageSize}
            disabled={loading}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-800 focus:border-blue-600 focus:outline-none disabled:opacity-50"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={loading || page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Prev
        </button>

        {pages.map((pageNumber) => {
          const isActive = pageNumber === page;
          return (
            <button
              key={pageNumber}
              type="button"
              disabled={loading}
              onClick={() => onPageChange(pageNumber)}
              className={`min-w-8 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer disabled:opacity-40 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          disabled={loading || page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}