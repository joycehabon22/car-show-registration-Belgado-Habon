import { sampleRegistrations } from "./sample-data";

// Pansamantalang mock data para sa isolated UI test (walang backend call)
const MOCK_ITEMS = Array.isArray(sampleRegistrations) ? sampleRegistrations : [];

export async function getRegistrations({
  participantName = "",
  search = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  let filtered = [...MOCK_ITEMS];

  const query = (participantName || search || "").toLowerCase().trim();
  if (query) {
    filtered = filtered.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(query)
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

export async function getSummary() {
  return {
    totalRegistrations: MOCK_ITEMS.length,
    approvedCount: MOCK_ITEMS.filter((r) => r.status === "Approved").length,
    pendingCount: MOCK_ITEMS.filter((r) => r.status === "Pending").length,
    totalRevenue: MOCK_ITEMS.reduce((sum, r) => sum + (Number(r.fee) || 0), 0),
  };
}

// Panatilihin din ang aliases kung sakaling gamitin sa ibang component
export const fetchRegistrations = getRegistrations;
export const fetchRegistrationsSummary = getSummary;