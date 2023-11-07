import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from 'src/layers/pages/home.component';
import { NavbarComponent } from 'src/layers/entities/ui/navbar/navbar.component';
import { UserSvgComponent } from 'src/layers/entities/ui/icons/user/userIcon.component';
import { HeroSliderComponent } from 'src/layers/features/ui/slider/heroSliler.component';
import { DirectivesModule } from 'src/layers/features/ui/slider/directives/swiper.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroSliderComponent,
    //svg icons
    UserSvgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DirectivesModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
