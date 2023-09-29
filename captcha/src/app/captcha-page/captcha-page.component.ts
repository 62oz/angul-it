import { Component, ViewChild } from '@angular/core';
import { EmojiSequenceComponent } from '../captcha-challenges/emoji-sequence/emoji-sequence.component';

@Component({
  selector: 'app-captcha-page',
  templateUrl: './captcha-page.component.html',
  styleUrls: ['./captcha-page.component.css']
})

export class CaptchaPageComponent {
  currentChallengeIndex = 0;
  challenges = [
    { type: 'emoji-sequence' },
    { type: 'find-the-note' },
    { type: 'colour-matching' }
  ];

  @ViewChild(EmojiSequenceComponent) emojiSequenceComponent?: EmojiSequenceComponent;

  isChallengeCompleted = false;

  onChallengeCompleted(isCorrect: boolean): void {
    this.isChallengeCompleted = isCorrect;
  }


  moveToNextChallenge() {
    if (this.currentChallengeIndex < this.challenges.length - 1) {
      this.currentChallengeIndex++;
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
    }
  }
}

