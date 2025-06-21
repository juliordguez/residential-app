import { guestGuard } from './guards/guest.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import(`./demo/authentication/login/login.module`).then(m => m.LoginModule),
    canActivate: [guestGuard]
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
      },
      {
        path: 'casas',
        loadChildren: () => import(`./demo/casas/casas.module`).then(m => m.CasasModule),
      },
      {
        path: 'noticias',
        loadChildren: () => import(`./demo/noticias/noticias.module`).then(m => m.NoticiasModule),
      },
      {
        path: 'deudores',
        loadChildren: () => import(`./demo/deudores/deudores.module`).then(m => m.DeudoresModule),
      },
      {
        path: 'proveedores',
        loadChildren: () => import(`./demo/proveedores/proveedores.module`).then(m => m.ProveedoresModule),
      },
      {
        path: 'vehiculos',
        loadChildren: () => import(`./demo/vehiculos/vehiculo.module`).then(m => m.VehiculoModule),
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
      },
      {
        path: 'roles',
        loadChildren: () => import(`./demo/roles/roles.module`).then(m => m.RolesModule),
      },

      {
        path: 'zona-comun',
        loadChildren: () => import(`./demo/zona-comun/zona-comun.module`).then(m => m.ZonaComunModule),
      },

      {
        path: 'reglamento',
        loadChildren: () => import(`./demo/reglamento/reglamento.module`).then(m => m.ReglamentoModule),
      },

      {
        path: 'vecinos',
        loadChildren: () => import(`./demo/vecinos/vecinos.module`).then(m => m.VecinosModule),
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
