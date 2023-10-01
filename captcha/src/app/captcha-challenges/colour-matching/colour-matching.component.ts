import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-colour-matching',
  templateUrl: './colour-matching.component.html',
  styleUrls: ['./colour-matching.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ColourMatchingComponent {
  @Input() challengeData: {
    currentHue: number;
    answerHue: number;
  } = { currentHue: 0, answerHue: 0 };

  @Output() challengeCompleted = new EventEmitter<boolean>();

  gradientStops: {offset: string, color: string}[] = [];

  ngOnInit(): void {
    const background = document.getElementById("all")!;
    background.style.backgroundColor = "rgb(28, 28, 28)";

    this.challengeData.answerHue = Math.floor(Math.random() * 361);
    this.challengeData.currentHue = this.challengeData.answerHue - 100;
    this.gradientStops.push({
      offset: '0%',
      color: `hsl(0, 0%, 100%)`
    });

    this.gradientStops.push({
      offset: '28%',
      color: `hsl(0, 0%, 100%)`
    });

    const interval = 1;
    for (let i = 28; i <= 100; i += interval) {
      const hue = this.calculateHue(i, 0, 100);
      this.gradientStops.push({
        offset: `${i}%`,
        color: `hsl(${hue}, 100%, 50%)`
      });
    }
  }

  selectedAnswer: boolean = false;

  onWheelClick(event: MouseEvent): void {
      const rect = (event.target as SVGSVGElement).getBoundingClientRect();
      const r = rect.width / 2;
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      const hue = this.calculateHue(x, y, r);

      this.challengeData.currentHue = hue;
      this.selectedAnswer = true;
      this.checkAnswer();
  }

  calculateHue(x: number, y: number, r: number): number {
    // Calculate distance from the center
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    // Calculate distance as a percentage of the radius.
    const distancePercentage = (distance - 0.28*r) / (r - 0.28*r);

    // Map the distance to a hue based on your gradient.
    const hue = (1 - distancePercentage) * 360;

    return hue;
  }

  checkAnswer(): void {
    const diff = Math.abs(this.challengeData.currentHue - this.challengeData.answerHue);
    if (diff < 5) {  // tolerance
      // Challenge is completed
      this.challengeCompleted.emit(true);
    }
  }
}
