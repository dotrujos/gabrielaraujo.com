import { Component } from '@angular/core';
import { ProjectItem } from '../../../../models/project-item';
import { ProjectList } from "../../../../components/project-list/project-list";
import { StyledButton } from "../../../../directives/styled-button";

@Component({
  selector: 'app-projects',
  imports: [ProjectList, StyledButton],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: ProjectItem[] = [
    { title: 'PROJETOS PESSOAIS' },
    { title: 'CONTRIBUIÇÕES' },
    { title: 'HACKATONS' },
  ];
}
