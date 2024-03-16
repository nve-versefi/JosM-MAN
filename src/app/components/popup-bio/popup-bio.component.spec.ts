import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBioComponent } from './popup-bio.component';

describe('PopupBioComponent', () => {
  let component: PopupBioComponent;
  let fixture: ComponentFixture<PopupBioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupBioComponent]
    });
    fixture = TestBed.createComponent(PopupBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
