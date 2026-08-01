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
      title: 'Projetos pessoais',
      description: 'Repositórios públicos no GitHub.',
      link: 'https://github.com/dotrujos?tab=repositories',
    },
  ];
}
