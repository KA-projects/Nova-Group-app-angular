import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentDetailsComponent } from 'src/layers/pages/apartment-details/apartment-details.component';
import { ApartmentsComponent } from 'src/layers/pages/apartments/apartments.component';
import { HomeComponent } from 'src/layers/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'apartments', component: ApartmentsComponent },
  {
    path: 'apartment-details/:externalId',
    component: ApartmentDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
