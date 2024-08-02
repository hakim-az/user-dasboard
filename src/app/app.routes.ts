import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user.module').then((m) => m.UserModule),
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./user.module').then((m) => m.UserModule),
  },
];
