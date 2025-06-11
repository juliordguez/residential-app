export class Mascota {
  id_mascota: number;
  id_user: number;
  id_tipo_mascota: number;
  id_tamanho: number;
  edad: number;
  id_temperamento: number;
  nombre: string;

  constructor(data: any) {
    this.id_mascota = data.id_mascota || null;
    this.id_user = data.id_user || 0;
    this.id_tipo_mascota = data.id_tipo_mascota || 0;
    this.id_tamanho = data.id_tamanho || 0;
    this.edad = data.edad || 0;
    this.id_temperamento = data.id_temperamento || 0;
    this.nombre = data.nombre || '';
  }
}

export class GetMascota {
  id_mascota: number;
  username: string;
  tipo_mascota: string;
  tamanho: string;
  edad: number;
  temperamento: string;
  nombre: string;
  numero_casa: string;

  constructor(data: any) {
    this.id_mascota = data.id_mascota || '';
    this.username = data.username || '';
    this.tipo_mascota = data.tipo_mascota || '';
    this.tamanho = data.tamanho || '';
    this.edad = data.edad || '';
    this.temperamento = data.temperamento || '';
    this.nombre = data.nombre || '';
    this.numero_casa = data.numero_casa || '';
  }
}
