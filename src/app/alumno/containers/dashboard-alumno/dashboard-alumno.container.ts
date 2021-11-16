import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.container.html',
  styleUrls: ['./dashboard-alumno.container.css']
})
export class DashboardAlumnoContainer implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  materia(name: string){
    this.router.navigate(['Alumno/Materia', name]);
  }

}
