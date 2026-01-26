import { computed, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class PopupStore {
  private readonly showContactPopup = signal<boolean>(false)

  //#region contactPopup
  public isToShowContactPopup() {
    return computed(() => this.showContactPopup())
  }

  public openContactPopup() {
    this.showContactPopup.set(true)
  }

  public closeContactPopup() {
    this.showContactPopup.set(false)
  }
  //#endregion
  
}