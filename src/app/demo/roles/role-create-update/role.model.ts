// export class Role {
//   id: number;
//   name: string;

//   constructor(rol) {
//     this.id = rol.id;
//     this.name = rol.name;
//   }

//   get getName() {
//     return this.name;
//   }

//   set setName(value) {
//   }
// }



export class Role {
  id_rol: number;
  name_rol: string;
  description: string;
  id_fraccionamiento: number;

  constructor(rol: any) {
    this.id_rol = rol.id_rol;
    this.name_rol = rol.name_rol;
    this.description = rol.description;
    this.id_fraccionamiento = rol.id_fraccionamiento;
  }
}
