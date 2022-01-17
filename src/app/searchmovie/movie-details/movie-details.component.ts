import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchMovieService } from 'src/app/search-movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:any='';
  movieId:any='';
  constructor(private route:ActivatedRoute,private searchm:SearchMovieService) { }

  ngOnInit()
  {
     this.movieId = this.route.snapshot.params.id;
    console.log("id",this.movieId);
     this.searchm.getMovieDetails(this.movieId).subscribe(
       (res)=>{
         console.log(res);
         this.movieDetails=res;
       },
       err =>{
        console.log("error!",err);
       }
     )
  }

}
