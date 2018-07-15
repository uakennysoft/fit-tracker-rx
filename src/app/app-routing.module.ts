import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/view/signup/signup.component';
import {LoginComponent} from './auth/view/login/login.component';
import {TrainingComponent} from './training/training.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'training', component: TrainingComponent, canActivate: [AuthGuard]},
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
