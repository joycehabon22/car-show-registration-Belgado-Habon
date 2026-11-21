import { useState, useEffect, useCallback } from 'react';
import { getRegistrations, getSummary } from '../api/registrationsApi';
import { useDebounce } from '../hooks/useDebounce';
import KpiCards from '../components/KpiCards';
import RegistrationFilters from '../components/RegistrationFilters';
import RegistrationTable from '../components/RegistrationTable';
import Pagination from '../components/Pagination';

export default function RegistrationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [registrationsData, setRegistrationsData] = useState({
    items: [],
    page: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0
  });
  const [summary, setSummary] = useState(null);

  const [loadingList, setLoadingList] = useState(true);
  const [loadingSummary, setLoadingSummary] = useState(true);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(searchTerm, 400);

  const fetchSummaryData = useCallback(async () => {
    setLoadingSummary(true);
    try {
      const data = await getSummary();
      setSummary(data);
    } catch {
      setSummary(null);
    } finally {
      setLoadingSummary(false);
    }
  }, []);

  const fetchRegistrationsData = useCallback(async () => {
    setLoadingList(true);
    setError(null);
    try {
      const data = await getRegistrations({
        participantName: debouncedSearch,
        type: typeFilter,
        status: statusFilter,
        page,
        pageSize
      });
      setRegistrationsData(data);
    } catch (err) {
      setError(err.message || 'Unable to connect to the registration server.');
    } finally {
      setLoadingList(false);
    }
  }, [debouncedSearch, typeFilter, statusFilter, page, pageSize]);

  useEffect(() => {
    fetchSummaryData();
  }, [fetchSummaryData]);

  useEffect(() => {
    fetchRegistrationsData();
  }, [fetchRegistrationsData]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setPage(1);
  };

  const handleTypeChange = (value) => {
    setTypeFilter(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setTypeFilter('');
    setStatusFilter('');
    setPage(1);
  };

  const handleRetry = () => {
    fetchSummaryData();
    fetchRegistrationsData();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              AutoVista Events · Sorsogon City Coliseum
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Car Show 2027 Registration Dashboard
            </h1>
          </div>
          <div className="text-xs text-slate-400">
            Staff Operations Portal
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <section aria-label="Event KPI Summary">
          <KpiCards summary={summary} loading={loadingSummary} />
        </section>

        <section aria-label="Registration Filters">
          <RegistrationFilters
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            typeFilter={typeFilter}
            onTypeChange={handleTypeChange}
            statusFilter={statusFilter}
            onStatusChange={handleStatusChange}
            onClearFilters={handleClearFilters}
          />
        </section>

        <section aria-label="Registrations List" className="space-y-4">
          {loadingList && (
            <p className="text-xs font-medium text-slate-500">Loading registrations…</p>
          )}

          <RegistrationTable
            items={registrationsData.items}
            loading={loadingList}
            error={error}
            onRetry={handleRetry}
            onClearFilters={handleClearFilters}
          />

          {!error && (
            <Pagination
              page={registrationsData.page}
              pageSize={registrationsData.pageSize}
              totalCount={registrationsData.totalCount}
              totalPages={registrationsData.totalPages}
              loading={loadingList}
              onPageChange={setPage}
              onPageSizeChange={handlePageSizeChange}
            />
          )}
        </section>
      </main>
    </div>
  );
}