export class Noticia {
  id_noticia: number;
  titulo: string;
  contenido: string;
  fecha_expiracion: string;
  categoria: string;
  prioridad: string;
  estado: string;

  constructor(data: any) {
    this.id_noticia = data.id_noticia;
    this.titulo = data.titulo;
    this.contenido = data.contenido;
    this.fecha_expiracion = data.fecha_expiracion;
    this.categoria = data.categoria;
    this.prioridad = data.prioridad;
    this.estado = data.estado;
  }
}
