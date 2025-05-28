export class Deudor {
  id: number;
  correo: string;
  nombre: string;
  monto: number;

  constructor(data: any) {
    this.id = data.id;
    this.correo = data.correo;
    this.nombre = data.nombre;
    this.monto = data.monto;
  }
}
