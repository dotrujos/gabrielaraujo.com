import { Component, inject } from '@angular/core';
import { PageShell } from '../../components/page-shell/page-shell';
import { EmptyState } from '../../components/empty-state/empty-state';
import { StyledButton } from '../../directives/styled-button';
import { ExperienceEntry } from '../../models/experience-entry';
import { SkillGroup } from '../../models/skill-group';
import { PopupStore } from '../../store/popup-store';

@Component({
  selector: 'app-about-page',
  imports: [PageShell, EmptyState, StyledButton],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  private readonly popupStore = inject(PopupStore)

  protected readonly skills: SkillGroup[] = [
    { label: 'Linguagens', items: ['C#', 'Java', 'TypeScript'] },
    { label: 'Front-end', items: ['Angular'] },
    { label: 'Cloud', items: ['Azure', 'Google Cloud'] },
    { label: 'Idiomas', items: ['Português', 'Inglês', 'Francês'] },
  ];

  protected readonly experiences: ExperienceEntry[] = [
    {
      role: 'Desenvolvedor Júnior',
      company: 'GFT Technologies',
      period: 'Junho 2026 — atual',
      summary:
        'Alocação para a GFT Itália. Desenvolvimento e sustentação de sistemas de revisão e análise de crédito para instituição financeira internacional.',
      stack: ['Java', 'PostgreSQL', 'Jenkins', 'Kafka', 'Drools'],
    },
    {
      role: 'Engenheiro de Software Júnior',
      company: 'OpenFlow',
      period: 'Julho 2025 — Maio 2026',
      summary:
        'Desenvolvimento e manutenção de conectores de dados entre CRM\'s.',
      stack: ['Java', 'TypeScript', 'SAP Emarsys', 'VTEX'],
    },
    {
      role: 'Estágiario de Desenvolvimento',
      company: 'Focus Têxtil',
      period: 'Janeiro 2024 — Abril 2025',
      summary:
        'Colaboração no desenvolvimento de soluções de software para a indústria têxtil. Colaborações nas rotinas de DevOps.',
      stack: ['C#', 'TypeScript', 'React', 'Angular', 'SQL Server', 'Node.JS', 'Azure', 'Azure DevOps'],
    },
  ];

  protected openContactPopup() {
    this.popupStore.openContactPopup();
  }
}
