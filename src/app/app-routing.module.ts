import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: PatientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }