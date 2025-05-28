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
    create: `${APIAUTH}/users/signup`,
    update: `${APIAUTH}/users`,
    delete: (uuid: string) => `${APIAUTH}/users/${uuid}`
  },
  rol: {
    list: `${APIMANAGMENT}/roles/1`,
    // list: `${environment.api}/roles`,
    getById: (id: number) => `${APIMANAGMENT}/roles/${id}`,
    create: `${APIMANAGMENT}/roles/register`,
    update: `${APIMANAGMENT}/roles/update`,
    delete: (id: number) => `${APIMANAGMENT}/rol/${id}`
  },
  casas: {
  list: `${APIMANAGMENT}/casas/1`,
  getById: (id: number) => `${APIMANAGMENT}/casas/${id}`,
  create: `${APIMANAGMENT}/casas/register`,
  update: `${APIMANAGMENT}/casas/update`,
  delete: (id: number) => `${APIMANAGMENT}/casas/delete/1/${id}`
  },
  noticias: {
  list: (id_fraccionamiento: number) => `${APIMANAGMENT}/noticias/${id_fraccionamiento}`,
  getById: (id: number) => `${APIMANAGMENT}/noticias/${id}`,
  create: `${APIMANAGMENT}/noticias/register`,
  update: `${APIMANAGMENT}/noticias/update`,
  delete: (id_fraccionamiento: number, id_noticia: number) => `${APIMANAGMENT}/noticias/delete/${id_fraccionamiento}/${id_noticia}`
  },
deudores: {
  list: `${APIMANAGMENT}/deudores/`,
  getById: (id: number) => `${APIMANAGMENT}/deudores/${id}`,
  create: `${APIMANAGMENT}/deudores/register`,
  update: `${APIMANAGMENT}/deudores/update`,
  delete: (id_deudor: number) =>
    `${APIMANAGMENT}/deudores/delete/${id_deudor}`
},
  mascotas: {
  list: `${APIMANAGMENT}/mascotas`,
  create: `${APIMANAGMENT}/mascotas/register`,
  update: `${APIMANAGMENT}/mascotas/update`,
  delete: `${APIMANAGMENT}/mascotas/delete`
  },
  fraccionamiento: {
    list: `${APIMANAGMENT}/fraccionamientos`,
    getById: (id: number) => `${APIMANAGMENT}/fraccionamiento/${id}`,
    create: `${APIMANAGMENT}/fraccionamiento`,
    update: `${APIMANAGMENT}/fraccionamiento`,
    delete: (id: number) => `${APIMANAGMENT}/fraccionamiento/${id}`
  },
  proveedores: {
  list: `${APIMANAGMENT}/proveedores/1`,
  getById: (id: number) => `${APIMANAGMENT}/proveedores/${id}`,
  create: `${APIMANAGMENT}/proveedores/register`,
  update: `${APIMANAGMENT}/proveedores/update`,
  delete: (id_proveedor: number) =>
    `${APIMANAGMENT}/proveedores/delete/1/${id_proveedor}`
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
