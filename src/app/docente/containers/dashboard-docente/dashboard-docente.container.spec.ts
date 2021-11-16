import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDocenteContainer } from './dashboard-docente.container';

describe('DashboardDocenteContainer', () => {
  let component: DashboardDocenteContainer;
  let fixture: ComponentFixture<DashboardDocenteContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDocenteContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDocenteContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
