import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificaciones-docente',
  templateUrl: './calificaciones-docente.component.html',
  styleUrls: ['./calificaciones-docente.component.css']
})
export class CalificacionesDocenteComponent implements OnInit {
  readonly allowedPageSizes = [5, 10, 15];
  dataSource

  constructor() { }

  ngOnInit(): void {
  }

}
