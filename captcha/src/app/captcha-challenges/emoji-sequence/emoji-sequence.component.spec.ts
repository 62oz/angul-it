import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiSequenceComponent } from './emoji-sequence.component';

describe('EmojiSequenceComponent', () => {
  let component: EmojiSequenceComponent;
  let fixture: ComponentFixture<EmojiSequenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmojiSequenceComponent]
    });
    fixture = TestBed.createComponent(EmojiSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
