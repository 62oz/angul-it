import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourMatchingComponent } from './colour-matching.component';

describe('ColourMatchingComponent', () => {
  let component: ColourMatchingComponent;
  let fixture: ComponentFixture<ColourMatchingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColourMatchingComponent]
    });
    fixture = TestBed.createComponent(ColourMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
