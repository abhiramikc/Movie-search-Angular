import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchMovieService } from 'src/app/search-movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public user:string | undefined;
  constructor(private searchm:SearchMovieService) { }

  ngOnInit(): void {
    this.user=localStorage["username"];
  }
  logout()
  {
    this.searchm.logout();
  }
}
