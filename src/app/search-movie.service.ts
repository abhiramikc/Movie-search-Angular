import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  constructor(private http:HttpClient,private router:Router) { }

  searchMovie(searchQuery: string): Observable<Array<any>> {
    return this.http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=662ba924&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }


  getMovieDetails(imdbId: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?i=${imdbId}&apikey=662ba924&i&plot=full`);
  }

  logout()
  {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("repassword");
    localStorage.removeItem("gender")
    this.router.navigate(["/login"]);

  }
  updateLocalStorage(registeruser: NgForm)
  {
localStorage.setItem("username", registeruser.controls.name.value);
localStorage.setItem("email", registeruser.controls.email.value);
localStorage.setItem("gender", registeruser.controls.gender.value);

localStorage.setItem("password", registeruser.controls.password.value);
localStorage.setItem("repassword", registeruser.controls.repassword.value);

alert("Details saved succesfully ");
  }


}
// http://www.omdbapi.com/?i=tt3896198&apikey=662ba924&plot=full
