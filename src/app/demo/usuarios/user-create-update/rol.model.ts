export class Usuario {
  id: number;
  name: string;

  constructor(rol) {
    this.id = rol.id;
    this.name = rol.name;
  }

  get getName() {
    return this.name;
  }

  set setName(value) {
  }
}
