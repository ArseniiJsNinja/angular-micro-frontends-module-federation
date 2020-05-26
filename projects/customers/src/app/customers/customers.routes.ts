import { Routes } from '@angular/router';
import { AllCustomersComponent } from './all/all-customers.component';

export const CUSTOMERS_ROUTES: Routes = [
  {
    path: 'all',
    component: AllCustomersComponent
  }
];
