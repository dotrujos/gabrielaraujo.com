import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "./components/layout/layout";
import { PopupStore } from './store/popup-store';
import { ContactPopup } from './components/contact-popup/contact-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, ContactPopup],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly popupStore = inject(PopupStore)
  
  protected readonly title = signal('personal-portfolio');
  protected readonly isToShowContactPopup = this.popupStore.isToShowContactPopup();

  constructor() {
    this.popupStore.openContactPopup()
  }

  protected closeContactPopup() {
    this.popupStore.closeContactPopup();
  }
}
