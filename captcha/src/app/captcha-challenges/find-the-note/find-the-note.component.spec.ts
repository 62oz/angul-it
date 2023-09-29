import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheNoteComponent } from './find-the-note.component';

describe('FindTheNoteComponent', () => {
  let component: FindTheNoteComponent;
  let fixture: ComponentFixture<FindTheNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindTheNoteComponent]
    });
    fixture = TestBed.createComponent(FindTheNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
