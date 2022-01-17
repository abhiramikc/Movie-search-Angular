import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchMovieService } from '../search-movie.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public username : string='';
  public password : string='';
  public email : string='';
  public gender : string='';
  public repassword:string='';
  public details:boolean=false;
  constructor(private searchm:SearchMovieService) { }

  ngOnInit() :void {
  this.viewUser();
  }
  viewUser() {
    this.password=localStorage['password'];
    this.username=localStorage['username'];
    this.email=localStorage['email'];
    this.gender=localStorage['gender'];
    this.repassword=localStorage['repassword'];

    if(this.gender!="" && this.password !="" && this.username !="" && this.email !="" && this.repassword!="")
    {
      this.details=true;
    }
    else{
      this.details=false;

    }

  }
  update(details:NgForm)
  {
    this.searchm.updateLocalStorage(details);
  }

}
