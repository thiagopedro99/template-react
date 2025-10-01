// src/services/api.types.ts
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';

export interface ApiResponse<T> {
  data: T;
  status: number;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
}

export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
}

// Exemplo de tipos para suas entidades
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}