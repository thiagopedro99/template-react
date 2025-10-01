// src/services/userService.ts
import { api } from './api';
import { User, PaginatedResponse, LoginRequest, LoginResponse } from './types';

class UserService {
  private basePath = '/users';

  // Listar usuários
  async list(page = 1, perPage = 10) {
    return api.get<PaginatedResponse<User>>(
      `${this.basePath}?page=${page}&per_page=${perPage}`
    );
  }

  // Buscar usuário por ID
  async getById(id: string) {
    return api.get<User>(`${this.basePath}/${id}`);
  }

  // Criar usuário
  async create(userData: Omit<User, 'id' | 'createdAt'>) {
    return api.post<User>(this.basePath, userData);
  }

  // Atualizar usuário
  async update(id: string, userData: Partial<User>) {
    return api.put<User>(`${this.basePath}/${id}`, userData);
  }

  // Deletar usuário
  async delete(id: string) {
    return api.delete<void>(`${this.basePath}/${id}`);
  }

  // Login
  async login(credentials: LoginRequest) {
    const response = await api.post<LoginResponse>('/auth/login', credentials);
    
    // Salvar token no localStorage
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    
    return response;
  }

  // Logout
  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }

  // Buscar perfil do usuário logado
  async getProfile() {
    return api.get<User>('/auth/profile');
  }
}

export const userService = new UserService();