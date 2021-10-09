import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAccountContainer } from './alumno-account.container';

describe('AlumnoAccountContainer', () => {
  let component: AlumnoAccountContainer;
  let fixture: ComponentFixture<AlumnoAccountContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoAccountContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoAccountContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
