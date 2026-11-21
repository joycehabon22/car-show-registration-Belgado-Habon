const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5205';

export async function getRegistrations({
  participantName = '',
  type = '',
  status = '',
  page = 1,
  pageSize = 10
} = {}) {
  const params = new URLSearchParams();

  if (participantName.trim()) params.append('participantName', participantName.trim());
  if (type) params.append('type', type);
  if (status) params.append('status', status);
  params.append('page', String(page));
  params.append('pageSize', String(pageSize));

  const response = await fetch(`${BASE_URL}/api/registrations?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch registrations (${response.status})`);
  }

  return response.json();
}

export async function getSummary() {
  const response = await fetch(`${BASE_URL}/api/registrations/summary`);

  if (!response.ok) {
    throw new Error(`Failed to fetch summary (${response.status})`);
  }

  return response.json();
}

export async function createRegistration(payload) {
  const response = await fetch(`${BASE_URL}/api/registrations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const error = new Error(errorData?.detail || 'Registration failed');
    error.status = response.status;
    error.problemDetails = errorData;
    throw error;
  }

  return response.json();
}