import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-avisos-docente',
  templateUrl: './avisos-docente.component.html',
  styleUrls: ['./avisos-docente.component.css']
})
export class AvisosDocenteComponent implements OnInit {
  comments = [];
  comForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comForm = this.formBuilder.group({
      aviso: ['']
      
    });

    this.comments = [{
      profe: 'Vicente Plata',
      daysAgo: 5,
      commentA: 'Comentario de apoyp para el grupo'
    }]
  }

  AddComment(){
    this.comments.push({profe: 'Vicente Plata', daysAgo: 1, commentA: this.comForm.value.aviso});
    this.comForm = this.formBuilder.group({
      aviso: ['']
      
    });
    console.log(this.comments)
  }

}
