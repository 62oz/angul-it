import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
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
    const background = document.getElementById("all")!;
    background.style.backgroundColor = "rebeccapurple";

    this.emojiService.fetchEmojisInRandomCategory(4).pipe(
      switchMap(({ category, emojis }) => {
        const sequence = emojis.slice(0, 3);
        return this.emojiService.fetchRandomEmojis(3, category).pipe(
          map(randomEmojis => {
            const insertAt = Math.floor(Math.random() * 4);
            randomEmojis.splice(insertAt, 0, emojis[3]);
            return {
              sequence,
              options: randomEmojis,
              answer: insertAt
            };
          })
        );
      })
    ).subscribe(({ sequence, options, answer }) => {
      this.challengeData.sequence = sequence;
      this.challengeData.options = options;
      this.challengeData.answer = answer;
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
