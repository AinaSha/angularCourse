import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myChangeColor]'
})
export class MyChangeColorDirectiveDirective implements AfterViewInit{

  private _el: ElementRef;

  // colors = ['red', 'green', 'blue']
  @Input('myChangeColor') colors?: string[]

  constructor(el: ElementRef) {
    this._el = el;
  }

  ngAfterViewInit(): void {
    this.changeColor(this._el)
  }

  private changeColor(el: ElementRef) {
    if (this.colors && this.colors.length !== 0) {
      setInterval(() => {
        el.nativeElement.style.color = this.colors![Math.floor(Math.random() * this.colors!.length)]
      }, 2000)
    }
    
  }
}
