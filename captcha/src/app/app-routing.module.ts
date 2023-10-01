import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptchaPageComponent } from './captcha-page/captcha-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'captcha', component: CaptchaPageComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
