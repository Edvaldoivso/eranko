import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeErankoComponent } from './Pages/home-eranko/home-eranko.component';

const routes: Routes = [
  {
    path: 'home-eranko',
    component: HomeErankoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
