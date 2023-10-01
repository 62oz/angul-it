import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { EmojiSequenceComponent } from '../captcha-challenges/emoji-sequence/emoji-sequence.component';
import { FindTheNoteComponent } from '../captcha-challenges/find-the-note/find-the-note.component';

@Component({
  selector: 'app-captcha-page',
  templateUrl: './captcha-page.component.html',
  styleUrls: ['./captcha-page.component.css']
})

export class CaptchaPageComponent implements AfterViewInit {
  currentChallengeIndex = 0;
  challenges = [
    { type: 'emoji-sequence' },
    { type: 'find-the-note' },
    { type: 'colour-matching' }
  ];

  @ViewChild(EmojiSequenceComponent) emojiSequenceComponent?: EmojiSequenceComponent;
  @ViewChild(FindTheNoteComponent) findTheNoteComponent?: FindTheNoteComponent;

  isChallengeCompleted = false;

  lives: number = 3;
  lives_div: HTMLElement | null = null;
  completedChallenges: number = 0;

  ngAfterViewInit(): void {
    this.lives_div = document.getElementById("lives");
    if (this.lives_div) {
      for (let i = 0; i < this.lives; i++) {
        this.lives_div.innerHTML += 'o';
      }
    }
  }

  onChallengeCompleted(isCorrect: boolean): void {
    this.isChallengeCompleted = isCorrect;
    if (!isCorrect) {
      this.lives--;
      this.lives_div!.innerHTML = '';
      for (let i = 0; i < this.lives; i++) {
        this.lives_div!.innerHTML += 'o'
      }
    }
  }


  moveToNextChallenge() {
    if (this.currentChallengeIndex < this.challenges.length - 1) {
      this.currentChallengeIndex++;
      if (this.currentChallengeIndex > this.completedChallenges) {
        this.completedChallenges = this.currentChallengeIndex;
      }
      this.isChallengeCompleted = false;
    }
  }

  moveToPreviousChallenge() {
    if (this.currentChallengeIndex > 0) {
      this.currentChallengeIndex--;
      this.isChallengeCompleted = false;
    }
  }

  retryChallenge() {
    this.isChallengeCompleted = false;

    if (this.challenges[this.currentChallengeIndex].type === 'emoji-sequence' && this.emojiSequenceComponent) {
        this.emojiSequenceComponent.resetChallenge();
    } else if (this.challenges[this.currentChallengeIndex].type === 'find-the-note') {
        this.findTheNoteComponent?.resetChallenge();
    } else {
      this.isChallengeCompleted = false;
      this.currentChallengeIndex = 0;
    }
  }
}

