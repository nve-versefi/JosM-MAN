import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesComponent } from './instituciones.component';

describe('InstitucionesComponent', () => {
  let component: InstitucionesComponent;
  let fixture: ComponentFixture<InstitucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionesComponent]
    });
    fixture = TestBed.createComponent(InstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
