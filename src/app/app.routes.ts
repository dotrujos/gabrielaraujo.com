import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects-page').then(m => m.ProjectsPage),
        pathMatch: 'full'
    },
    {
        path: 'hackaton',
        loadComponent: () => import('./pages/hackatons/hackatons-page').then(m => m.HackatonsPage),
        pathMatch: 'full'
    },
    {
        path: 'contributions',
        loadComponent: () => import('./pages/contributions/contributions-page').then(m => m.ContributionsPage),
        pathMatch: 'full'
    },
    {
        path: '**',
        component: Home,
        pathMatch: 'full'
    }
];
