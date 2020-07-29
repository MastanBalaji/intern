import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: '**',
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
