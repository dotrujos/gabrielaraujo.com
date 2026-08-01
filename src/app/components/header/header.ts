import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SerifFont } from '../../directives/serif-font';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, SerifFont],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly isMenuOpen = signal<boolean>(false)

  protected toggleMenu() {
    this.isMenuOpen.update(isOpen => !isOpen);
  }

  protected closeMenu() {
    this.isMenuOpen.set(false);
  }
}
