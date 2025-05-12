import { environment } from '../environments/environment';

const API = environment.apiBase;
const APIAUTH = environment.apiBaseAdmin;
const APIMANAGMENT = environment.apiBaseManagment;


export const API_ENDPOINTS = {
  auth: {
    // login: `${API}/users/login`,

    // login: `https://login-manager.onrender.com/api/users/login`,
    login: `${APIAUTH}/users/login`,
    register: `${APIAUTH}/auth/register`,
    refreshToken: `${APIAUTH}/auth/refresh-token`
  },
  users: {
    list: `${APIMANAGMENT}/users/1`,
    // list: `${environment.api}/users`,
    getById: (id: number) => `${APIMANAGMENT}/users/${id}`,
    create: `${APIMANAGMENT}/users`,
    update: `${APIMANAGMENT}/users`,
    delete: (id: number) => `${APIMANAGMENT}/users/${id}`
  },
  rol: {
    list: `${APIMANAGMENT}/roles/1`,
    // list: `${environment.api}/roles`,
    getById: (id: number) => `${APIMANAGMENT}/rol/${id}`,
    create: `${APIMANAGMENT}/rol/users`,
    update: `${APIMANAGMENT}/rol/users`,
    delete: (id: number) => `${APIMANAGMENT}/rol/${id}`
  },
  fraccionamiento: {
    list: `${APIMANAGMENT}/fraccionamientos`,
    getById: (id: number) => `${APIMANAGMENT}/fraccionamiento/${id}`,
    create: `${APIMANAGMENT}/fraccionamiento`,
    update: `${APIMANAGMENT}/fraccionamiento`,
    delete: (id: number) => `${APIMANAGMENT}/fraccionamiento/${id}`
  },
  attendance: {
    register: `${APIMANAGMENT}/attendance/register`,
    history: `${APIMANAGMENT}/attendance/history`
  },
  company: {
    list: `${APIMANAGMENT}/fracccionamiento`,
    getById: (id: number) => `${APIMANAGMENT}/company/${id}`,
    update: (id: number) => `${APIMANAGMENT}/company/${id}`
  }
};
