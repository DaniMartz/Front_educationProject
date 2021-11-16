import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-materia-alumno',
  templateUrl: './materia-alumno.container.html',
  styleUrls: ['./materia-alumno.container.css']
})
export class MateriaAlumnoContainer implements OnInit {
  @Input() materiaName: string;

  tabActual: number = 0;
  longtabs = [
    { text: 'Avisos'},
    { text: 'Tareas'},
    { text: 'Calificaciones'}
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.materiaName = this.route.snapshot.paramMap.get("nombre");
  }

  selectTab(e){
    this.tabActual = e.itemIndex;
  }

}
