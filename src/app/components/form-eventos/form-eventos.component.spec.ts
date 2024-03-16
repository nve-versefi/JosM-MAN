import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEventosComponent } from './form-eventos.component';

describe('FormEventosComponent', () => {
  let component: FormEventosComponent;
  let fixture: ComponentFixture<FormEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEventosComponent]
    });
    fixture = TestBed.createComponent(FormEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
