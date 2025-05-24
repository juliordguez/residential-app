export class Usuario {
  id: number;
  username: string;
  name_fraccionamiento: string;
  casa: string;
  fraccionamiento: number;
  phoneNumber: string;
  email: string;
  user_uuid: string;
  nick_name: string;

  constructor(usuario) {
    this.id = usuario.id;
    this.username = usuario.username;
    this.name_fraccionamiento = usuario.name_fraccionamiento;
    this.casa = usuario.casa;
    this.fraccionamiento = usuario.fraccionamiento;
    this.phoneNumber = usuario.phoneNumber;
    this.email = usuario.email;
    this.user_uuid = usuario.user_uuid;
    this.nick_name = usuario.nick_name;
  }

  get name() {
    return this.username;
  }

  set name(value) {
  }

  set address(value) {
  }
}
