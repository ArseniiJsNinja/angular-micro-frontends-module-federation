import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PncModule } from './pnc/pnc.module';

@NgModule({
  imports: [BrowserModule, PncModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
