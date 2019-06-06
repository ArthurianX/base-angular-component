import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DemoComponent} from './demo/demo.component';
import {LottieAnimationViewModule} from 'ng-lottie';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LottieAnimationViewModule.forRoot()
  ],
  exports: [ DemoComponent ],
})
export class BaseAngularComponentModule {}

