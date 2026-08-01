import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-shell',
  imports: [],
  templateUrl: './page-shell.html',
  styleUrl: './page-shell.scss',
})
export class PageShell {
  readonly index = input.required<string>()
  readonly title = input.required<string>()
  readonly deck = input.required<string>()
}
