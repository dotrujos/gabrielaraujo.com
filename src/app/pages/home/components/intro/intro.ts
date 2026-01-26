import { Component, inject } from '@angular/core';
import { SerifFont } from '../../../../directives/serif-font';
import { StyledButton } from "../../../../directives/styled-button";
import { PopupStore } from '../../../../store/popup-store';

@Component({
  selector: 'app-intro',
  imports: [SerifFont, StyledButton],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  private readonly popupStore = inject(PopupStore)
  
  protected openContactPopup() {
    this.popupStore.openContactPopup();
  }
}
