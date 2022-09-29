import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormComponent } from './persons/person-form/person-form.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'persons', pathMatch: 'full',
  },

  {
    path:'persons',
    component: PersonsComponent
  },

  {
    path:'person/:id',
    component: PersonFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
