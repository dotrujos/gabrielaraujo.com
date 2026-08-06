import { computed, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

const THEME_COLORS: Record<Theme, string> = {
  dark: '#0A0A0C',
  light: '#EDE8D0',
};

@Injectable({
  providedIn: 'root',
})
export class ThemeStore {
  private readonly darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  private readonly activeTheme = signal<Theme>(this.resolveInitialTheme())

  public readonly theme = this.activeTheme.asReadonly()
  public readonly isDark = computed(() => this.activeTheme() === 'dark')

  constructor() {
    this.applyTheme(this.activeTheme());

    // enquanto o usuário não escolher explicitamente, o site continua
    // acompanhando o tema do navegador, inclusive se ele mudar depois
    this.darkQuery.addEventListener('change', event => {
      if (this.readStoredTheme()) {
        return;
      }

      this.setTheme(event.matches ? 'dark' : 'light', false);
    });
  }

  public toggleTheme() {
    this.setTheme(this.activeTheme() === 'dark' ? 'light' : 'dark', true);
  }

  private setTheme(theme: Theme, persist: boolean) {
    this.activeTheme.set(theme);
    this.applyTheme(theme);

    if (persist) {
      this.writeStoredTheme(theme);
    }
  }

  private resolveInitialTheme(): Theme {
    return this.readStoredTheme() ?? (this.darkQuery.matches ? 'dark' : 'light');
  }

  private applyTheme(theme: Theme) {
    document.documentElement.dataset['theme'] = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme]);
  }

  private readStoredTheme(): Theme | null {
    // localStorage lança em modo privado / cookies bloqueados
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
      return null;
    }
  }

  private writeStoredTheme(theme: Theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // preferência não persiste, mas o tema da sessão continua valendo
    }
  }
}
