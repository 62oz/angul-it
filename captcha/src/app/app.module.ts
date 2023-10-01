import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptchaPageComponent } from './captcha-page/captcha-page.component';
import { EmojiSequenceComponent } from './captcha-challenges/emoji-sequence/emoji-sequence.component';
import { ColourMatchingComponent } from './captcha-challenges/colour-matching/colour-matching.component';
import { HttpClientModule } from '@angular/common/http';
import { FindTheNoteComponent } from './captcha-challenges/find-the-note/find-the-note.component';
import { PianoComponent } from './captcha-challenges/find-the-note/piano/piano.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptchaPageComponent,
    EmojiSequenceComponent,
    ColourMatchingComponent,
    FindTheNoteComponent,
    PianoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
