import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosAlumnoComponent } from './avisos-alumno.component';

describe('AvisosAlumnoComponent', () => {
  let component: AvisosAlumnoComponent;
  let fixture: ComponentFixture<AvisosAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisosAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
