import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from 'src/layers/pages/home/home.component';
import { NavbarComponent } from 'src/layers/entities/ui/navbar/navbar.component';
import { UserSvgComponent } from 'src/layers/entities/ui/icons/user/userIcon.component';
import { HeroSliderComponent } from 'src/layers/features/ui/slideshow/heroSliler.component';
import { DirectivesModule } from 'src/layers/features/ui/slideshow/directives/swiper.module';
import { CardNewsComponent } from 'src/layers/entities/ui/card-news/cardNews.component';
import { ArrowButtonComponent } from '../layers/shared/ui/button/arrowbutton/arrowbutton.component';
import { FilterButtonComponent } from 'src/layers/features/ui/filter-button/filter-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentListComponent } from 'src/layers/widgets/ui/apartment-list/apartment-list.component';
import { ClientConsultationComponent } from 'src/layers/features/ui/client-consultation/client-consultation.component';

import { SnackBarForFeedbackComponent } from 'src/layers/features/ui/snack-bar-for-feedback/snack-bar-for-feedback';
import { HomePurchaseMethodsComponent } from '../layers/widgets/ui/home-purchase-methods/home-purchase-methods.component';
import { ChipsComponent } from '../layers/features/ui/chips/chips.component';

import { MarqueeComponent } from '../layers/features/ui/marquee/marquee.component';
import { FooterComponent } from '../layers/entities/ui/footer/footer.component';
import { BottomNavbarComponent } from '../layers/entities/ui/bottom-navbar/bottom-navbar.component';
import { ApartmentDetailsComponent } from '../layers/pages/apartment-details/apartment-details.component';
import { SvgBathComponent } from '../layers/features/svg/svg-bath/svg-bath.component';
import { SvgFurnishedComponent } from 'src/layers/features/svg/svg-furnished/svg-furnished.component';
import { ApartmentsComponent } from '../layers/pages/apartments/apartments.component';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroSliderComponent,
    CardNewsComponent,
    ArrowButtonComponent,
    ApartmentListComponent,
    //svg icon
    UserSvgComponent,
    HomePurchaseMethodsComponent,
    MarqueeComponent,
    BottomNavbarComponent,
    ApartmentDetailsComponent,
    SvgBathComponent,
    SvgFurnishedComponent,
    ApartmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    BrowserAnimationsModule,
    FilterButtonComponent,
    ClientConsultationComponent,
    SnackBarForFeedbackComponent,
    ChipsComponent,
    FooterComponent,
    NgOptimizedImage,
    FormsModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
