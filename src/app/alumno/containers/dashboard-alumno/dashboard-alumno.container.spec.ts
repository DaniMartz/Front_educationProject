import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAlumnoContainer } from './dashboard-alumno.container';

describe('DashboardAlumnoContainer', () => {
  let component: DashboardAlumnoContainer;
  let fixture: ComponentFixture<DashboardAlumnoContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAlumnoContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAlumnoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
