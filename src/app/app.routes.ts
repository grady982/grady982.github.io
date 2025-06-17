import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'demo/no-code-canvas', loadComponent: () => import('./feature-projects/no-code-canvas/no-code-canvas.component').then(m => m.NoCodeCanvasComponent) },
    { path: 'demo/edm-editor', loadComponent: () => import('./feature-projects/edm-editor/edm-editor.component').then(m => m.EdmEditorComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
