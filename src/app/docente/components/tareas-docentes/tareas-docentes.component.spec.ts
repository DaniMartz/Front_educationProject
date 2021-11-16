import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasDocentesComponent } from './tareas-docentes.component';

describe('TareasDocentesComponent', () => {
  let component: TareasDocentesComponent;
  let fixture: ComponentFixture<TareasDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
