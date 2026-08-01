import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShell } from '../../components/page-shell/page-shell';
import { EmptyState } from '../../components/empty-state/empty-state';
import { HackatonEntry } from '../../models/hackaton-entry';
import { isExternalLink } from '../../utils/link';

@Component({
  selector: 'app-hackatons-page',
  imports: [PageShell, EmptyState, RouterLink],
  templateUrl: './hackatons-page.html',
  styleUrl: './hackatons-page.scss',
})
export class HackatonsPage {
  // preencher no formato: { event, year, role?, result?, summary?, stack?, link? }
  protected readonly hackatons: HackatonEntry[] = [
    {
      event: 'Maratona de Programação Layers 0b11',
      year: '2025',
      result: '2º lugar',
    }
  ];

  protected isExternal(hackaton: HackatonEntry): boolean {
    return isExternalLink(hackaton.link);
  }
}
