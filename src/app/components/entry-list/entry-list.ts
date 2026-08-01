import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageEntry } from '../../models/page-entry';
import { isExternalLink } from '../../utils/link';

@Component({
  selector: 'app-entry-list',
  imports: [RouterLink],
  templateUrl: './entry-list.html',
  styleUrl: './entry-list.scss',
})
export class EntryList {
  readonly entries = input.required<PageEntry[]>()

  protected isExternal(entry: PageEntry): boolean {
    return isExternalLink(entry.link);
  }
}
