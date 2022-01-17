import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchMovieService } from '../search-movie.service';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.scss']
})
export class SearchmovieComponent implements OnInit {
public search : string ='';
public movie : any = '';
public results:boolean = false;
  constructor(private searchm:SearchMovieService) { }

  ngOnInit() {
  }
   searchMovie()
  {
    this.searchm.searchMovie(this.search).subscribe(
      (res:any)=>{
        console.log("res",res);
        this.movie=res;
        if(this.movie == undefined || this.movie == ''|| this.movie.length == 0)
        {
          this.results=false;
        }
        else{
          this.results=true;
        }
        console.log("this.movie",this.movie);
      }
    )
  }
}
