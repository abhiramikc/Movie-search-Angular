import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import {RegisterComponent} from './login/register/register.component'
import { MovieDetailsComponent } from './searchmovie/movie-details/movie-details.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {path:'',component:SearchmovieComponent,canActivate:[AuthGuard]},
  {path:"search",component:SearchmovieComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component: RegisterComponent},
  {path:"moviedetails/:id",component:MovieDetailsComponent,canActivate:[AuthGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"settings",component:SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
