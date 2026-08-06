import { Component, inject } from '@angular/core';
import { ThemeStore } from '../../store/theme-store';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  private readonly themeStore = inject(ThemeStore)

  protected readonly isDark = this.themeStore.isDark

  protected toggleTheme() {
    this.themeStore.toggleTheme();
  }
}
