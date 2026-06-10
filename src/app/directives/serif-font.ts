import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[serifFont]',
})
export class SerifFont {

  private readonly el = inject(ElementRef)

  constructor() {
    this.el.nativeElement.style.fontFamily = 'Georgia'
    this.el.nativeElement.style.fontWeight = '400'
    this.el.nativeElement.style.letterSpacing ='-0.06em'
  }
}
