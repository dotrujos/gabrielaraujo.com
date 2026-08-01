import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: 'about',
        title: 'Sobre mim | Gabriel Araújo',
        loadComponent: () => import('./pages/about/about-page').then(m => m.AboutPage),
        pathMatch: 'full'
    },
    {
        path: 'projects',
        title: 'Projetos | Gabriel Araújo',
        loadComponent: () => import('./pages/projects/projects-page').then(m => m.ProjectsPage),
        pathMatch: 'full'
    },
    {
        path: 'hackaton',
        title: 'Hackatons | Gabriel Araújo',
        loadComponent: () => import('./pages/hackatons/hackatons-page').then(m => m.HackatonsPage),
        pathMatch: 'full'
    },
    {
        path: 'contributions',
        title: 'Contribuições | Gabriel Araújo',
        loadComponent: () => import('./pages/contributions/contributions-page').then(m => m.ContributionsPage),
        pathMatch: 'full'
    },
    {
        path: '**',
        title: 'Portfólio | Gabriel Araújo',
        component: Home,
        pathMatch: 'full'
    }
];
