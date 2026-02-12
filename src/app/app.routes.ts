import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: 'hackaton',
        loadComponent: () => import('./pages/wip/wip').then(m => m.Wip),
        pathMatch: 'full'
    },
    {
        path: 'contributions',
        loadComponent: () => import('./pages/wip/wip').then(m => m.Wip),
        pathMatch: 'full'
    },
    {
        path: '**',
        component: Home,
        pathMatch: 'full'
    }
];
