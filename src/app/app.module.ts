import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import {SearchMovieService} from './search-movie.service'
import { HttpClientModule } from "@angular/common/http";
import { MovieItemComponent } from './searchmovie/movie-item/movie-item.component';
import { RegisterComponent } from './login/register/register.component';
import { MovieDetailsComponent } from './searchmovie/movie-details/movie-details.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchmovieComponent,
    NavbarComponent,
    MovieItemComponent,
    RegisterComponent,
    MovieDetailsComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [SearchMovieService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
