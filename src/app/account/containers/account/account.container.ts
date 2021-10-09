import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.container.html',
  styleUrls: ['./account.container.css']
})
export class AccountContainer implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  acceder(tipo){
    if(tipo === "alumno"){
      //SE HACEN LAS VALIDACIONES CORRESPONDIENTES
      this.router.navigate(['Account/Alumno']);
    }else{
      //SE HACEN LAS VALIDACIONES CORRESPONDIENTES
      this.router.navigate(['Account/Docente']);
    }
  }

}
