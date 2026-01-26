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
    { title: 'PROJETOS PESSOAIS' },
    { title: 'CONTRIBUIÇÕES' },
    { title: 'HACKATONS' },
  ];

  protected openContactPopup() {
    this.popupStore.openContactPopup();
  }
}
