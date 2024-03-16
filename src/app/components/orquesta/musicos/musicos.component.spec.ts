import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicosComponent } from './musicos.component';

describe('MusicosComponent', () => {
  let component: MusicosComponent;
  let fixture: ComponentFixture<MusicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicosComponent]
    });
    fixture = TestBed.createComponent(MusicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
