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
      // {
      //   path: 'apps/inbox',
      //   loadChildren: () => import(`./demo/apps/inbox/inbox.module`).then(m => m.InboxModule),
      // },
      // {
      //   path: 'apps/calendar',
      //   loadChildren: () => import(`./demo/apps/calendar/calendar.module`).then(m => m.CalendarAppModule),
      // },
      // {
      //   path: 'apps/chat',
      //   loadChildren: () => import(`./demo/apps/chat/chat.module`).then(m => m.ChatModule),
      // },
      // {
      //   path: 'components',
      //   loadChildren: () => import(`./demo/components/components.module`).then(m => m.ComponentsModule),
      // },
      // {
      //   path: 'forms/form-elements',
      //   loadChildren: () => import(`./demo/forms/form-elements/form-elements.module`).then(m => m.FormElementsModule),
      // },
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
