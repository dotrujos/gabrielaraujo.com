import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-contact-popup',
  standalone: true,
  imports: [],
  templateUrl: './contact-popup.html',
  styleUrl: './contact-popup.scss',
})
export class ContactPopup {
  closed = output<void>()

  protected close() {
    this.closed.emit();
  }
}
