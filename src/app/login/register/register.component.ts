import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  invalidLogin: boolean=false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
onSubmit(registeruser: NgForm)
{
  console.log(registeruser);
if(registeruser.controls.password.value !=registeruser.controls.repassword.value)
{
  alert("password must be equal")
  this.invalidLogin=true;
  registeruser.form.reset();
  return;
}
console.log(registeruser.value)
console.log(registeruser.controls.email.value)
localStorage.setItem("username", registeruser.controls.name.value);
localStorage.setItem("email", registeruser.controls.email.value);
localStorage.setItem("gender", registeruser.controls.gender.value);

localStorage.setItem("password", registeruser.controls.password.value);
localStorage.setItem("repassword", registeruser.controls.repassword.value);

alert("Details saved succesfully ")
registeruser.form.reset();
this.router.navigate(['/login']);

}
}
