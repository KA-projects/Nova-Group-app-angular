import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from 'src/layers/pages/home.component';
import { NavbarComponent } from 'src/layers/entities/ui/navbar/navbar.component';
import { UserSvgComponent } from 'src/layers/entities/ui/icons/user/userIcon.component';
import { HeroSliderComponent } from 'src/layers/features/ui/slider/heroSliler.component';
import { DirectivesModule } from 'src/layers/features/ui/slider/directives/swiper.module';
import { CardNewsComponent } from 'src/layers/entities/ui/card-news/cardNews.component';
import { ArrowButtonComponent } from '../layers/shared/ui/button/arrowbutton/arrowbutton.component';
import { FilterButtonComponent } from 'src/layers/features/ui/filter-button/filter-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentListComponent } from 'src/layers/widgets/ui/apartment-list/apartment-list.component';
import { ClientConsultationComponent } from 'src/layers/features/ui/client-consultation/client-consultation.component';

import { SnackBarForFeedbackComponent } from 'src/layers/features/ui/snack-bar-for-feedback/snack-bar-for-feedback';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroSliderComponent,
    CardNewsComponent,
    ArrowButtonComponent,
    ApartmentListComponent,
    //svg icons
    UserSvgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    BrowserAnimationsModule,
    FilterButtonComponent,
    ClientConsultationComponent,
    SnackBarForFeedbackComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
