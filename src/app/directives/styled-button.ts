import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[styledButton]',
})
export class StyledButton {

  private readonly el = inject(ElementRef)

  constructor() {
    this.el.nativeElement.style.padding = '15px'
    this.el.nativeElement.style.borderRadius = '100px'
    this.el.nativeElement.style.backgroundColor = 'var(--bg)'
    this.el.nativeElement.style.border = '2px solid var(--fg)'

    // <button> não herda font-size do documento e <a> herda: sem fixar
    // aqui, as pílulas saem com tamanhos diferentes conforme a tag usada
    this.el.nativeElement.style.fontSize = '0.85rem'
    this.el.nativeElement.style.lineHeight = '1'
    this.el.nativeElement.style.display = 'inline-flex'
    this.el.nativeElement.style.alignItems = 'center'
    this.el.nativeElement.style.justifyContent = 'center'
    this.el.nativeElement.style.color = 'var(--fg)'
    this.el.nativeElement.style.textDecoration = 'none'
  }

}
