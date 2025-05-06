import { environment } from '../environments/environment';

const API = environment.apiBase;

export const API_ENDPOINTS = {
  auth: {
    login: `${API}/users/login`,
    register: `${API}/auth/register`,
    refreshToken: `${API}/auth/refresh-token`
  },
  users: {
    list: `http://127.0.0.1:7091/api/v1/user`,
    // list: `${environment.api}/users`,
    getById: (id: number) => `${API}/users/${id}`,
    create: `${API}/users`,
    update: `${API}/users`,
    delete: (id: number) => `${API}/users/${id}`
  },
  rol: {
    list: `http://127.0.0.1:7091/api/v1/roles`,
    // list: `${environment.api}/roles`,
    getById: (id: number) => `${API}/rol/${id}`,
    create: `${environment.api}/rol/users`,
    update: `${environment.api}/rol/users`,
    delete: (id: number) => `${API}/rol/${id}`
  },
  fraccionamiento: {
    list: `${environment.api}/fraccionamientos`,
    getById: (id: number) => `${API}/fraccionamiento/${id}`,
    create: `${API}/fraccionamiento`,
    update: `${API}/fraccionamiento`,
    delete: (id: number) => `${API}/fraccionamiento/${id}`
  },
  attendance: {
    register: `${API}/attendance/register`,
    history: `${API}/attendance/history`
  },
  company: {
    list: `${environment.api}/fracccionamiento`,
    getById: (id: number) => `${API}/company/${id}`,
    update: (id: number) => `${API}/company/${id}`
  }
};
