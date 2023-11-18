import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentDetailsComponent } from 'src/layers/pages/apartment-details/apartment-details.component';
import { HomeComponent } from 'src/layers/pages/home/home.component';
import { ApartmentListComponent } from 'src/layers/widgets/ui/apartment-list/apartment-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'apartments', component: ApartmentListComponent },
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
