import { guestGuard } from './guards/guest.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { permissionGuard } from './guards/permissions.guard'


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import(`./demo/authentication/login/login.module`).then(m => m.LoginModule),
    canActivate: [guestGuard],
    data: { permission: 'usuarios:view' }
  },
  {
    path: 'register',
    loadChildren: () => import(`./demo/authentication/register/register.module`).then(m => m.RegisterModule),
    canActivate: [guestGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import(`./demo/authentication/forgot-password/forgot-password.module`).then(m => m.ForgotPasswordModule),
    canActivate: [guestGuard]
  },
  {
    path: 'coming-soon',
    loadChildren: () => import(`./demo/coming-soon/coming-soon.module`).then(m => m.ComingSoonModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import(`./demo/dashboard/dashboard.module`).then(m => m.DashboardModule),
        pathMatch: 'full',
      },
      {
        path: 'mascotas',
        loadChildren: () => import(`./demo/mascotas/mascotas.module`).then(m => m.MascotasModule),
        canActivate: [permissionGuard],
        data: { permission: 'GETMSCTSMET01' }
      },
      {
        path: 'casas',
        loadChildren: () => import(`./demo/casas/casas.module`).then(m => m.CasasModule),
        canActivate: [permissionGuard],
        data: { permission: 'GETCSASMET01' }
      },
      {
        path: 'noticias',
        loadChildren: () => import(`./demo/noticias/noticias.module`).then(m => m.NoticiasModule),
        canActivate: [permissionGuard],
        data: { permission: 'GETNTCSMET01' }
      },
      {
        path: 'deudores',
        loadChildren: () => import(`./demo/deudores/deudores.module`).then(m => m.DeudoresModule),
        canActivate: [permissionGuard],
        data: { permission: 'GETDDRSMET01' }
      },
      {
        path: 'proveedores',
        loadChildren: () => import(`./demo/proveedores/proveedores.module`).then(m => m.ProveedoresModule),
        canActivate: [permissionGuard],
        data: { permission: 'GETPRVDRSMET01' }
      },
      {
        path: 'perfil',
        loadChildren: () => import(`./demo/perfil/perfil.module`).then(m => m.PerfilModule),
        canActivate: [permissionGuard],
        data: { permission: 'PERFIL_VIEW' }
      },
      // {
      //   path: 'forms/form-wizard',
      //   loadChildren: () => import(`./demo/forms/form-wizard/form-wizard.module`).then(m => m.FormWizardModule),
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () => import(`./demo/icons/icons.module`).then(m => m.IconsModule),
      // },
      // {
      //   path: 'page-layouts',
      //   loadChildren: () => import(`./demo/page-layouts/page-layouts.module`).then(m => m.PageLayoutsModule),
      // },
      {
        path: 'usuarios',
        loadChildren: () => import(`./demo/usuarios/usuarios.module`).then(m => m.UsuariosModule),
        canActivate: [permissionGuard],
        data: { permission: 'GETUSRSMET01' }
      },
      {
        path: 'roles',
        loadChildren: () => import(`./demo/roles/roles.module`).then(m => m.RolesModule),
        canActivate: [permissionGuard],
        data: { permission: 'GETROLSMET01' }
      },

      // {
      //   path: 'drag-and-drop',
      //   loadChildren: () => import(`./demo/drag-and-drop/drag-and-drop.module`).then(m => m.DragAndDropModule),
      // },
      // {
      //   path: 'editor',
      //   loadChildren: () => import(`./demo/editor/editor.module`).then(m => m.EditorModule),
      // },
      // {
      //   path: 'blank',
      //   loadChildren: () => import(`./demo/blank/blank.module`).then(m => m.BlankModule),
      // },
      // {
      //   path: 'level1/level2/level3/level4/level5',
      //   loadChildren: () => import(`./demo/level5/level5.module`).then(m => m.Level5Module),
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
