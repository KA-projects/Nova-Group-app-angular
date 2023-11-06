import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/layers/pages/home.component';
import { NavbarComponent } from 'src/layers/entities/ui/navbar/navbar.component';
import { UserSvgComponent } from 'src/layers/entities/ui/icons/user/userIcon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    //svg icons
    UserSvgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
