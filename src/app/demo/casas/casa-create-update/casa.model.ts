export class Casa {
  id: number;
  numero_casa: string;
  casa_uuid?: string;
  id_fraccionamiento?: number;

  constructor(casa: any) {
    this.id = casa.id_casa;
    this.numero_casa = casa.numero_casa;
    this.id_fraccionamiento = casa.id_fraccionamiento;
  }

  get name() {
    return this.numero_casa;
  }

  set name(value) {}
  set address(value) {}
}
