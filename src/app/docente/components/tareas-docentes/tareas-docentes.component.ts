import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface Homework {
  creationDate: Date;
  description: string;
  dueToDate: Date;
}

@Component({
  selector: 'app-tareas-docentes',
  templateUrl: './tareas-docentes.component.html',
  styleUrls: ['./tareas-docentes.component.css']
})
export class TareasDocentesComponent implements OnInit {

  homeworks$: Observable<Homework[]>;
  isHomeWorkModalOpen = false;
  hwDescription$ = new BehaviorSubject<string>('');
  hwDueTo$ = new BehaviorSubject<Date>(new Date());


  constructor() { }

  ngOnInit(): void {

    this.homeworks$ = of([]);

  }

  addHomework(hw: Homework[]) {
    const date = new Date();
    hw.push({creationDate:date, description: this.hwDescription$.value, dueToDate: this.hwDueTo$.value});
    console.log(hw);
    this.toggleHomeworkModal();
  }

  toggleHomeworkModal() {
    this.isHomeWorkModalOpen = !this.isHomeWorkModalOpen;
    this.resetModalValues();
  }

  resetModalValues(){
    this.hwDescription$.next('');
    this.hwDueTo$.next(new Date());
  }
}
