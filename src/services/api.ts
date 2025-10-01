// src/services/api.ts
import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { ApiResponse, ApiError } from './types';

// Configuração base da API
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de Request
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Adicionar token de autenticação se existir
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log da requisição (apenas em desenvolvimento)
    if (import.meta.env.DEV) {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de Response
apiClient.interceptors.response.use(
  (response) => {
    // Log da resposta (apenas em desenvolvimento)
    if (import.meta.env.DEV) {
      console.log(`[API Response] ${response.status} ${response.config.url}`);
    }
    return response;
  },
  (error) => {
    // Tratamento de erros global
    const apiError: ApiError = {
      message: error.message || 'Erro desconhecido',
      status: error.response?.status,
      data: error.response?.data,
    };

    // Log do erro (apenas em desenvolvimento)
    if (import.meta.env.DEV) {
      console.error('[API Error]', apiError);
    }

    // Tratamento específico por status
    if (error.response?.status === 401) {
      // Token inválido ou expirado
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    } else if (error.response?.status === 403) {
      // Sem permissão
      console.error('Acesso negado');
    } else if (error.response?.status === 404) {
      // Recurso não encontrado
      console.error('Recurso não encontrado');
    } else if (error.response?.status >= 500) {
      // Erro no servidor
      console.error('Erro no servidor');
    }

    return Promise.reject(apiError);
  }
);

// Classe wrapper para requisições tipadas
class ApiService {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await apiClient.get<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await apiClient.post<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  }

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await apiClient.put<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  }

  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await apiClient.patch<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await apiClient.delete<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  }
}

export const api = new ApiService();
export default apiClient;