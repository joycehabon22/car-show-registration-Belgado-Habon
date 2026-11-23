import { sampleRegistrations } from "./sample-data";

// Pansamantalang mock data para sa isolated UI test (walang backend call)
const MOCK_ITEMS = Array.isArray(sampleRegistrations) ? sampleRegistrations : [];

export async function fetchRegistrationsSummary() {
  return {
    totalRegistrations: MOCK_ITEMS.length,
    approvedCount: MOCK_ITEMS.filter((r) => r.status === "Approved").length,
    pendingCount: MOCK_ITEMS.filter((r) => r.status === "Pending").length,
    totalRevenue: MOCK_ITEMS.reduce((sum, r) => sum + (Number(r.fee) || 0), 0),
  };
}

export async function fetchRegistrations({
  page = 1,
  pageSize = 10,
  search = "",
  type = "",
  status = "",
} = {}) {
  let filtered = [...MOCK_ITEMS];

  if (search && search.trim() !== "") {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(q)
    );
  }

  if (type && type !== "ALL" && type !== "All Types") {
    filtered = filtered.filter(
      (item) => String(item.type || "").toLowerCase() === type.toLowerCase()
    );
  }

  if (status && status !== "ALL" && status !== "All Statuses") {
    filtered = filtered.filter(
      (item) => String(item.status || "").toLowerCase() === status.toLowerCase()
    );
  }

  const totalCount = filtered.length;
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return {
    items,
    totalCount,
    page,
    pageSize,
  };
}