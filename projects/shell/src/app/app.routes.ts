import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'customers',
    loadChildren: () => import('customers/Module').then(m => m.CustomersModule)
  },
  {
    path: 'pnc',
    loadChildren: () => import('pnc/Module').then(m => m.PncModule)
  }
];
