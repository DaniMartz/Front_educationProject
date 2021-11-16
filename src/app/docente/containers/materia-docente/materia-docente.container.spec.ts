import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDocenteContainer } from './materia-docente.container';

describe('MateriaDocenteContainer', () => {
  let component: MateriaDocenteContainer;
  let fixture: ComponentFixture<MateriaDocenteContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaDocenteContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaDocenteContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
