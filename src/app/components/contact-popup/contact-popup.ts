import { Component, HostListener, output } from '@angular/core';
import { SerifFont } from '../../directives/serif-font';

interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact-popup',
  standalone: true,
  imports: [SerifFont],
  templateUrl: './contact-popup.html',
  styleUrl: './contact-popup.scss',
})
export class ContactPopup {
  closed = output<void>()

  protected readonly channels: ContactChannel[] = [
    {
      label: 'EMAIL',
      value: 'gabriel.araujo2902@outlook.com.br',
      href: 'mailto:gabriel.araujo2902@outlook.com.br',
    },
    {
      label: 'LINKEDIN',
      value: 'in/garaújo',
      href: 'https://linkedin.com/in/garaújo',
    },
    {
      label: 'WHATSAPP',
      value: '+55 (11) 99204-6942',
      href: 'https://wa.me/5511992046942',
    },
  ];

  @HostListener('document:keydown.escape')
  protected close() {
    this.closed.emit();
  }
}
