import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'resume', loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent) },
    { path: '', redirectTo: 'resume', pathMatch: 'full' },
];
