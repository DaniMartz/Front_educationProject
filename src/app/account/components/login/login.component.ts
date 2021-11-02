import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input () rol: string;
  register: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registro(){
    this.register = !this.register;
  }

  goTo(){
    if(this.rol === "alumno"){
      this.router.navigate(['Alumno/Dashboard']);
    }else{
      this.router.navigate(['Docente/Dashboard']);
    }
  }

}
