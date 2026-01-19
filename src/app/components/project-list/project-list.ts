import { Component, input, output } from '@angular/core';
import { ProjectItem } from '../../models/project-item';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList {
  items = input.required<ProjectItem[]>();
  itemClicked = output<ProjectItem>();

  handleAction(item: ProjectItem): void {
    this.itemClicked.emit(item);
  }
}
