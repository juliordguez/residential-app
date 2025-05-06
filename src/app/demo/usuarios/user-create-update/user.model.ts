export class Usuario {
  id: number;
  username: string;
  rol: string;
  casa: string;
  fraccionamiento: number;
  phoneNumber: string;
  email: string;


  constructor(usuario) {
    this.id = usuario.id;
    this.username = usuario.username;
    this.rol = usuario.rol;
    this.casa = usuario.casa;
    this.fraccionamiento = usuario.fraccionamiento;
    this.phoneNumber = usuario.phoneNumber;
    this.email = usuario.email;
  }

  get name() {
    return this.username;
  }

  set name(value) {
  }

  set address(value) {
  }
}
