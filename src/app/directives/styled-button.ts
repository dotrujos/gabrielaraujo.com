import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[styledButton]',
})
export class StyledButton {

  private readonly el = inject(ElementRef)

  constructor() { 
    this.el.nativeElement.style.padding = '15px'
    this.el.nativeElement.style.borderRadius = '100px'
    this.el.nativeElement.style.backgroundColor = 'var(--black)'
    this.el.nativeElement.style.border = '2px solid var(--white)'
  }

}
