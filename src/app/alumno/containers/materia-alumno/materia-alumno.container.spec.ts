import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAlumnoContainer } from './materia-alumno.container';

describe('MateriaAlumnoContainer', () => {
  let component: MateriaAlumnoContainer;
  let fixture: ComponentFixture<MateriaAlumnoContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaAlumnoContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaAlumnoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
