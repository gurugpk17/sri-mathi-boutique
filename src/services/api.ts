import type { Product } from '../data/products';

export interface InquiryPayload {
  name: string;
  email: string;
  whatsapp: string;
  category: string;
  message: string;
  productId?: string;
}

export interface AdminStats {
  totalDesigns: string;
  totalInquiries: string;
  totalReviews: string;
  recentUploads: string;
}

export interface InquiryRecord {
  name: string;
  service: string;
  state: string;
  time: string;
}

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL ?? '';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return response.json();
}

export function getProducts(): Promise<Product[]> {
  return request<Product[]>('/api/products');
}

export function getProductById(id: string): Promise<Product> {
  return request<Product>(`/api/products/${encodeURIComponent(id)}`);
}

export function submitInquiry(payload: InquiryPayload): Promise<{ success: boolean; message?: string }> {
  return request<{ success: boolean; message?: string }>('/api/inquiries', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function getAdminStats(): Promise<AdminStats> {
  return request<AdminStats>('/api/admin/stats');
}

export function getRecentInquiries(): Promise<InquiryRecord[]> {
  return request<InquiryRecord[]>('/api/admin/inquiries');
}
