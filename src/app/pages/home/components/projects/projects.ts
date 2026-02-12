import { Component, inject } from '@angular/core';
import { ProjectItem } from '../../../../models/project-item';
import { ProjectList } from "../../../../components/project-list/project-list";
import { StyledButton } from "../../../../directives/styled-button";
import { PopupStore } from '../../../../store/popup-store';

@Component({
  selector: 'app-projects',
  imports: [ProjectList, StyledButton],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly popupStore = inject(PopupStore)

  protected readonly projects: ProjectItem[] = [
    { title: 'PROJETOS PESSOAIS', link: 'https://github.com/dotrujos?tab=repositories' },
    { title: 'CONTRIBUIÇÕES', link: '/contributions' },
    { title: 'HACKATONS', link: '/hackaton' },
  ];

  protected openContactPopup() {
    this.popupStore.openContactPopup();
  }

  protected handleProjectClick(project: ProjectItem) {
    window.open(project.link, '_blank')
  }
}
