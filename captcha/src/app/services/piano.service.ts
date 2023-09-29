import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PianoService {

  constructor() { }

  private audioContext = new window.AudioContext();

  // Frequencies for each note in the 4th octave
  private noteFrequencies: { [key: string]: number } = {
    "C": 261.63,
    "C#": 277.18,
    "D": 293.66,
    "D#": 311.13,
    "E": 329.63,
    "F": 349.23,
    "F#": 369.99,
    "G": 392.00,
    "G#": 415.30,
    "A": 440.00,
    "A#": 466.16,
    "B": 493.88
  };

  playNote(note: string): void {
    const oscillator = this.audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(this.noteFrequencies[note], this.audioContext.currentTime);
    oscillator.connect(this.audioContext.destination);
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 1);
  }
}
