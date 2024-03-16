import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnterioresComponent } from './anteriores.component';

describe('AnterioresComponent', () => {
  let component: AnterioresComponent;
  let fixture: ComponentFixture<AnterioresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnterioresComponent]
    });
    fixture = TestBed.createComponent(AnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
