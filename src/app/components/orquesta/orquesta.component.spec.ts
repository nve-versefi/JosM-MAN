import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrquestaComponent } from './orquesta.component';

describe('OrquestaComponent', () => {
  let component: OrquestaComponent;
  let fixture: ComponentFixture<OrquestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrquestaComponent]
    });
    fixture = TestBed.createComponent(OrquestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
