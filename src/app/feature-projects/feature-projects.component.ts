import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatDialog } from '@angular/material/dialog';
import { DataLineageComponent } from './data-lineage/data-lineage.component';
import { NoCodeCanvasComponent } from './no-code-canvas/no-code-canvas.component';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-feature-projects',
  imports: [ ProjectCardComponent ],
  templateUrl: './feature-projects.component.html',
  styleUrl: './feature-projects.component.scss'
})
export class FeatureProjectsComponent {

  projects: Project[] = [
    {
      name: 'Blog',
      description: `
        This blog began in January 2024 as a space to share my learning journey and experiences in web development. 
        It's built with Angular and Angular Material, featuring a responsive design, Firebase Authentication, and a rich text editor for creating posts. 
        Without a traditional backend, it uses Firebase Realtime Database to store content and is fully hosted on Firebase.
      `,
      imageUrl: '/assets/images/blog.png',
      link: 'https://grady-blog.web.app/'
    },
    {
      name: 'No-code Canvas',
      description: `
        It allows users to create and manage flowcharts visually, 
        supporting drag-and-drop functionality, node creation, and connection management. 
        The project is built with Angular and uses Drawflow for the canvas interface. 
        It aims to provide a user-friendly experience for designing workflows without coding.
        The project is still in development, with plans to add more features like node customization and data export.
      `,
      imageUrl: '/assets/images/no-code-canvas.png',
      link: '/projects/node-code-canvas'
    },
    // TODO: EDM Editor
    {
      name: 'Data Lineage',
      description: `
        This project visualizes data lineage using a family tree structure. 
        It employs D3.js for rendering and FamilyTree.js for managing relationships, 
        allowing users to explore data connections interactively.
      `,
      imageUrl: '/assets/images/data-lineage.png',
      link: '/projects/data-lineage'
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
    }
  }
}
