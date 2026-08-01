import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectItem } from '../../models/project-item';
import { isExternalLink } from '../../utils/link';

@Component({
  selector: 'app-project-list',
  imports: [RouterLink],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList {
  items = input.required<ProjectItem[]>();

  protected isExternal(item: ProjectItem): boolean {
    return isExternalLink(item.link);
  }
}
