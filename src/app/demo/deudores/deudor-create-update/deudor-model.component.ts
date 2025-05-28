export class Deudor {
  id_deudor: number;
  id_user: number;
  meses_deuda: number;
  cantidad_deuda: number;

  constructor(data: any) {
    this.id_deudor = data.id_deudor || null;
    this.id_user = data.id_user || null;
    this.meses_deuda = data.meses_deuda || 0;
    this.cantidad_deuda = data.cantidad_deuda || 0;
  }
}
