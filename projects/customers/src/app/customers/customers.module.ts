import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCustomersComponent } from './all/all-customers.component';
import { RouterModule } from '@angular/router';
import { CUSTOMERS_ROUTES } from './customers.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(CUSTOMERS_ROUTES)],
  declarations: [AllCustomersComponent]
})
export class CustomersModule {}
