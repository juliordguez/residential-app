import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleName',
  pure: false
})
export class RoleNamePipe implements PipeTransform {

  transform(roleId: number | string, roles: { id_rol: number | string, name: string }[]): string {
    if (!roleId || !roles || !Array.isArray(roles)) return 'Desconocido'; // ✅ Evita errores si `roles` está vacío
    console.log('Pipe recibido -> roleId:', roleId, 'roles:', roles); // ✅ Depuración en consola
    const role = roles.find(r => r.id_rol == roleId); // ✅ Asegurar que `id_rol` existe en `roles`
    return role ? role.name : 'Desconocido';
  }

}

// import { Pipe, PipeTransform } from '@angular/core';
// import { Roles } from './rol.demo';

// @Pipe({
//   name: 'rolNombre'
// })
// export class RolNombrePipe implements PipeTransform {
//   transform(id_rol: number): string {
//     const rol = Roles.find(r => r.id_rol === id_rol);
//     return rol ? rol.name_rol : 'Desconocido';
//   }
// }
