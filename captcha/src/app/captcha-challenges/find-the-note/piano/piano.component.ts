import { Component, EventEmitter, Output } from '@angular/core';
import { PianoService } from 'src/app/services/piano.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent {
  @Output() noteClicked = new EventEmitter<string>();

  keys = [
    { note: 'C', type: 'white-key' },
    { note: 'C#', type: 'black-key' },
    { note: 'D', type: 'white-key' },
    { note: 'D#', type: 'black-key' },
    { note: 'E', type: 'white-key' },
    { note: 'F', type: 'white-key' },
    { note: 'F#', type: 'black-key' },
    { note: 'G', type: 'white-key' },
    { note: 'G#', type: 'black-key' },
    { note: 'A', type: 'white-key' },
    { note: 'A#', type: 'black-key' },
    { note: 'B', type: 'white-key' }
  ];

  constructor(private pianoService: PianoService) {}

  onKeyClick(note: string) {
    this.noteClicked.emit(note);
    this.pianoService.playNote(note);  // Play the note sound
  }

}
