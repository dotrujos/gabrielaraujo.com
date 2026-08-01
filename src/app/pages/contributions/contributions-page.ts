import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShell } from '../../components/page-shell/page-shell';
import { EmptyState } from '../../components/empty-state/empty-state';
import { ContributionEntry } from '../../models/contribution-entry';
import { isExternalLink } from '../../utils/link';

@Component({
  selector: 'app-contributions-page',
  imports: [PageShell, EmptyState, RouterLink],
  templateUrl: './contributions-page.html',
  styleUrl: './contributions-page.scss',
})
export class ContributionsPage {
  // preencher no formato: { project, kind, summary, year?, link? }
  protected readonly contributions: ContributionEntry[] = [
    {
      project: 'CleanArch Enablers',
      kind: 'SDK',
      summary: 'SDK para reduzir atrito de desenvolvimento de aplicações com Clean Architecture.',
      year: '2025, 2026',
      link: 'https://github.com/clean-arch-enablers-project'
    }
  ];

  protected isExternal(contribution: ContributionEntry): boolean {
    return isExternalLink(contribution.link);
  }
}
