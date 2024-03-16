import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrensaComponent } from './prensa.component';

describe('PrensaComponent', () => {
  let component: PrensaComponent;
  let fixture: ComponentFixture<PrensaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrensaComponent]
    });
    fixture = TestBed.createComponent(PrensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
