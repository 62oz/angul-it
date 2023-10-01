import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit(): void {
    const button = this.el.nativeElement.querySelector('.custom_button');
    this.renderer.listen(button, 'click', () => {
      this.navigateToCaptcha();
    });
  }

  navigateToCaptcha(): void {
    this.router.navigate(['/captcha']);
  }
}
