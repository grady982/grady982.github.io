import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'demo/no-code-flow', loadComponent: () => import('./feature-projects/node-code-flow/node-code-flow.component').then(m => m.NodeCodeFlowComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
