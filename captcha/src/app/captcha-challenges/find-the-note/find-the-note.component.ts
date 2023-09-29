import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find-the-note',
  templateUrl: './find-the-note.component.html',
  styleUrls: ['./find-the-note.component.css']
})
export class FindTheNoteComponent {
  @Input() challengeData: {
    allNotes: string;
    answer: string;
  } = { allNotes: "", answer: "" };

  @Output() challengeCompleted = new EventEmitter<boolean>();
  selectedAnswer: string | null = null;

  onNoteSelected(note: string) {

  }
}
