import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-materia-docente',
  templateUrl: './materia-docente.container.html',
  styleUrls: ['./materia-docente.container.css']
})
export class MateriaDocenteContainer implements OnInit {
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
