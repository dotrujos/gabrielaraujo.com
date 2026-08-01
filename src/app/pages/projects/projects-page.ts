import { Component } from '@angular/core';
import { PageShell } from '../../components/page-shell/page-shell';
import { EntryList } from '../../components/entry-list/entry-list';
import { EmptyState } from '../../components/empty-state/empty-state';
import { PageEntry } from '../../models/page-entry';

@Component({
  selector: 'app-projects-page',
  imports: [PageShell, EntryList, EmptyState],
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  protected readonly entries: PageEntry[] = [
    {
      title: 'Motivie',
      description: 'Acervo de Estampas.',
      link: 'https://motivie.com',
      year: '2026',
      tags: ['Go', 'Google Cloud']
    },
     {
      title: 'Call for Azure',
      description: 'Série Hands-on no Youtube para quem não conhece de Microsoft Azure.',
      year: '2026',
      tags: ['Azure', '.NET', 'C#', 'Microsoft', 'Youtube']
    },
    {
      title: 'Velo',
      description: 'Rede social, Mapas e Eventos para ciclistas.',
      link: 'https://github.com/velo-project',
      year: '2025',
      tags: ['Swift', 'iOS', 'Java', 'Go', 'Google Cloud'],
    },
  ];
}
