import { Component, inject } from '@angular/core';
import { Project, ProjectCardComponent } from './project-card/project-card.component';
import { MatDialog } from '@angular/material/dialog';
import { DataLineageComponent } from './data-lineage/data-lineage.component';
import { NoCodeCanvasComponent } from './no-code-canvas/no-code-canvas.component';
import { EdmEditorComponent } from './edm-editor/edm-editor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-projects',
  imports: [ ProjectCardComponent ],
  templateUrl: './feature-projects.component.html',
  styleUrl: './feature-projects.component.scss'
})
export class FeatureProjectsComponent {

  router = inject(Router);

  projects: Project[] = [
    {
      name: 'Blog',
      description: `
        This blog began in January 2024 as a space to share my learning journey and experiences in web development. 
        It's built with Angular and Angular Material, featuring a responsive design, Firebase Authentication, and a rich text editor for creating posts. 
        Without a traditional backend, it uses Firebase Realtime Database to store content and is fully hosted on Firebase.
      `,
      imageUrl: '/assets/images/blog.png',
      link: 'https://grady-blog.web.app/',
      linkeText: 'Visit Blog'
    },
    {
      name: 'No-code Canvas',
      description: `
        It allows users to create and manage flowcharts visually, 
        supporting drag-and-drop functionality, node creation, and connection management. 
        The project is built with Angular and uses Drawflow for the canvas interface. 
        It aims to provide a user-friendly experience for designing workflows without coding.
      `,
      imageUrl: '/assets/images/no-code-canvas.png',
      link: '',
      linkeText: 'View Demo'
    },
    {
      name: 'Data Lineage',
      description: `
        This project visualizes data lineage using a family tree structure. 
        It employs D3.js for rendering and FamilyTree.js for managing relationships, 
        allowing users to explore data connections interactively.
      `,
      imageUrl: '/assets/images/data-lineage.png',
      link: '',
      linkeText: 'View Demo'
    },
    {
      name: 'EDM Editor',
      description: `
        This project is an email template editor built with GrapesJS, 
        allowing users to create and edit responsive email templates visually. 
        It features a drag-and-drop interface, a rich text editor, and a library of components for building custom emails.
      `,
      imageUrl: '/assets/images/edm-editor.png',
      link: '',
      linkeText: 'View Demo'
    },
    // TODO: Embedded Tableau Report
    // TODO: SQL Flow
  ];

  dialog = inject(MatDialog);

  onViewProject(e: Project) {
    switch (e.name) {
      case 'Blog':
        window.open(e.link, '_blank');
        break;
      case 'Data Lineage':
        this.dialog.open(DataLineageComponent, {
          width: '1200px',
          minWidth: '1200px',
        });
        break;
      case 'No-code Canvas':
        this.dialog.open(NoCodeCanvasComponent, {
          width: '1200px',
          minWidth: '1200px',
          height: '800px',
        });
        break;
      case 'EDM Editor':
        this.dialog.open(EdmEditorComponent, {
          width: '1200px',
          minWidth: '1200px',
          height: '700px',
        });
        break;
    }
  }
}
