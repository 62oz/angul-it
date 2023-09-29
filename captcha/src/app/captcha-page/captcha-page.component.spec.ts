import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaPageComponent } from './captcha-page.component';

describe('CaptchaPageComponent', () => {
  let component: CaptchaPageComponent;
  let fixture: ComponentFixture<CaptchaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptchaPageComponent]
    });
    fixture = TestBed.createComponent(CaptchaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
