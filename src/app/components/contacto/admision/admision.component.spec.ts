import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionComponent } from './admision.component';

describe('AdmisionComponent', () => {
  let component: AdmisionComponent;
  let fixture: ComponentFixture<AdmisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmisionComponent]
    });
    fixture = TestBed.createComponent(AdmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
