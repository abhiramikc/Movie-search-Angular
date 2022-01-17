import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  invalidLogin: boolean = false;
  login(form: NgForm)
  {

    console.log('login',form);
    const credential=JSON.stringify(form.value);
    let username=form.controls.username.value;
    let password=form.controls.password.value;
    let localusername=localStorage.getItem('username');
    let localpassword=localStorage.getItem('password');
    if (username==localusername && password==localpassword)
    {
      this.invalidLogin=false;
      this.route.navigate(['/dashboard']);
    }
    else
    {
      this.invalidLogin=true;
    }
    console.log('credential',form.controls.username.value);


  }

  }




