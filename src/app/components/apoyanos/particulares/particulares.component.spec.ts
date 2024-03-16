import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularesComponent } from './particulares.component';

describe('ParticularesComponent', () => {
  let component: ParticularesComponent;
  let fixture: ComponentFixture<ParticularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularesComponent]
    });
    fixture = TestBed.createComponent(ParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
