import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PncComponent } from './pnc/pnc.component';
import { RouterModule } from '@angular/router';
import { PNC_ROUTES } from './pnc.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PNC_ROUTES)],
  declarations: [PncComponent]
})
export class PncModule {}
