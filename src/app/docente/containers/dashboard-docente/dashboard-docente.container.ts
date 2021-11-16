import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { ServicioGeneralService } from "../../../_services/servicio-general.service";

@Component({
  selector: 'app-dashboard-docente',
  templateUrl: './dashboard-docente.container.html',
  styleUrls: ['./dashboard-docente.container.css']
})
export class DashboardDocenteContainer implements OnInit {
  subjects;
  subjectGetter:Subscription;

  constructor(private router: Router,
    private _service:ServicioGeneralService) { }
  // nombre: '';

  ngOnInit(): void {
    this.subjectGetter = this._service.getSubjects().subscribe(data => {
      console.log("respuesta del login ", data);
      this.subjects = data
    });
  }

  materia(name: string){
    this.router.navigate(['Docente/Materia', name]);
  }

}
