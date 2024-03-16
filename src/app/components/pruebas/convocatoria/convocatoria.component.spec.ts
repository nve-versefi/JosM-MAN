import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaComponent } from './convocatoria.component';

describe('ConvocatoriaComponent', () => {
  let component: ConvocatoriaComponent;
  let fixture: ComponentFixture<ConvocatoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvocatoriaComponent]
    });
    fixture = TestBed.createComponent(ConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
