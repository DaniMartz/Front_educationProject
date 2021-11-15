import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-docente',
  templateUrl: './dashboard-docente.container.html',
  styleUrls: ['./dashboard-docente.container.css']
})
export class DashboardDocenteContainer implements OnInit {

  constructor(private router: Router) { }
  // nombre: '';

  ngOnInit(): void {
  }

  materia(name: string){
    this.router.navigate(['Docente/Materia', name]);
  }

}
