import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[serifFont]',
})
export class SerifFont {

  private readonly el = inject(ElementRef)

  constructor() {
    this.el.nativeElement.style.fontFamily = 'Junicode'
    this.el.nativeElement.style.fontWeight = '400'
  }
}
