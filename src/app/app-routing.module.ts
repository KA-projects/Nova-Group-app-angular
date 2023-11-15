import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/layers/pages/home.component';
import { ApartmentListComponent } from 'src/layers/widgets/ui/apartment-list/apartment-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'apa', component: ApartmentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
