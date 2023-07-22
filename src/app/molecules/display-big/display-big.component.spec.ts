import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBigComponent } from './display-big.component';

describe('DisplayBigComponent', () => {
  let component: DisplayBigComponent;
  let fixture: ComponentFixture<DisplayBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBigComponent]
    });
    fixture = TestBed.createComponent(DisplayBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
