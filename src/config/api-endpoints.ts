import { environment } from '../environments/environment';

export const API_ENDPOINTS = {
  auth: {
    login: `${environment.api}/api/users/login`,
    register: `${environment.api}/auth/register`,
    refreshToken: `${environment.api}/auth/refresh-token`
  },
  users: {
    list: `${environment.api}/users`,
    getById: (id: number) => `${environment.api}/users/${id}`,
    update: (id: number) => `${environment.api}/users/${id}`,
    delete: (id: number) => `${environment.api}/users/${id}`
  },
  attendance: {
    register: `${environment.api}/attendance/register`,
    history: `${environment.api}/attendance/history`
  },
  company: {
    list: `${environment.api}/company`,
    getById: (id: number) => `${environment.api}/company/${id}`,
    update: (id: number) => `${environment.api}/company/${id}`
  }
};
