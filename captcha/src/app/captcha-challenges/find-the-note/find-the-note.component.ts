import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PianoService } from 'src/app/services/piano.service';

@Component({
  selector: 'app-find-the-note',
  templateUrl: './find-the-note.component.html',
  styleUrls: ['./find-the-note.component.css']
})
export class FindTheNoteComponent implements OnInit {
  @Input() challengeData: {
    allNotes: string[];
    answer: string;
  } = { allNotes: ["C", "C#", "D", "D#", "E", "F", "F#",
                  "G", "G#", "A", "A#", "B"], answer: "" };

  @Output() challengeCompleted = new EventEmitter<boolean>();
  selectedAnswer: string | null = null;

  constructor(private pianoService: PianoService) {}

  ngOnInit(): void {
    this.challengeData.answer = this.challengeData.allNotes[Math.floor(Math.random() * this.challengeData.allNotes.length)];
  }

  playNote(): void {
    this.pianoService.playNote(this.challengeData.answer);
  }


  submitAnswer(): void {
    const isCorrect = this.selectedAnswer === this.challengeData.answer;
    if (!isCorrect) {
      this.selectedAnswer = null;
      this.ngOnInit();
    }
    this.challengeCompleted.emit(isCorrect);
  }

  resetChallenge(): void {
    this.selectedAnswer = null;
    this.ngOnInit();
  }
}
