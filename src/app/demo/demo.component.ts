import { Component, OnInit, EventEmitter, Input, ChangeDetectorRef,
  ChangeDetectionStrategy, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DemoComponent implements OnInit {

  public lottieConfig: object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
    this.lottieConfig = {
      path: 'assets/data.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  ngOnInit(): void {
    console.log('Init DemoComponent');
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

}
