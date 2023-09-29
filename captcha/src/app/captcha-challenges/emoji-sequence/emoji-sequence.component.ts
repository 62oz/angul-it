import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EmojiService } from 'src/app/services/emoji.service';

@Component({
  selector: 'app-emoji-sequence',
  templateUrl: './emoji-sequence.component.html',
  styleUrls: ['./emoji-sequence.component.css']
})
export class EmojiSequenceComponent implements OnInit {
  @Input() challengeData: {
    category: string;          // The category name
    sequence: string[];        // The 3 emojis of the category
    options: string[];         // The 4 random emojis (which includes 1 from the category)
    answer: number;            // The index of the correct emoji in the options
  } = { category: "", sequence: [], options: [], answer: 0 }

  @Output() challengeCompleted = new EventEmitter<boolean>();
  selectedAnswer: number | null = null;

  constructor(private emojiService: EmojiService) {}

  ngOnInit(): void {
    forkJoin({
      categoryEmojis: this.emojiService.fetchEmojisInRandomCategory(4),
      randomEmojis: this.emojiService.fetchRandomEmojis(3)
    }).subscribe(({ categoryEmojis, randomEmojis }) => {
      this.challengeData.sequence = categoryEmojis.slice(0, 3);

      const insertAt = Math.floor(Math.random() * 4);
      randomEmojis.splice(insertAt, 0, categoryEmojis[3]);

      this.challengeData.options = randomEmojis;
      this.challengeData.answer = insertAt;
    });
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
