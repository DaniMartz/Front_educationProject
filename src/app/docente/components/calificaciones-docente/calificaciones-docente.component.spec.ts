import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesDocenteComponent } from './calificaciones-docente.component';

describe('CalificacionesDocenteComponent', () => {
  let component: CalificacionesDocenteComponent;
  let fixture: ComponentFixture<CalificacionesDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
