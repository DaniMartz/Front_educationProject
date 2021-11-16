import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteAccountContainer } from './docente-account.container';

describe('DocenteAccountContainer', () => {
  let component: DocenteAccountContainer;
  let fixture: ComponentFixture<DocenteAccountContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteAccountContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteAccountContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
