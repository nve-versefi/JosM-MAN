import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoComponent } from './apoyo.component';

describe('ApoyoComponent', () => {
  let component: ApoyoComponent;
  let fixture: ComponentFixture<ApoyoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApoyoComponent]
    });
    fixture = TestBed.createComponent(ApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
