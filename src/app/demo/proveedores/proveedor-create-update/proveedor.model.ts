export class Proveedor {
  id_proveedor: number;
  nombre: string;
  tipo_servicio: string;
  telefono: string;
  correo: string;
  url_imagen: string;

  constructor(data: any) {
    this.id_proveedor = data.id_proveedor;
    this.nombre = data.nombre;
    this.tipo_servicio = data.tipo_servicio;
    this.telefono = data.telefono;
    this.correo = data.correo;
    this.url_imagen = data.url_imagen;
  }
}
