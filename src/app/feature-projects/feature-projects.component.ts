import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-feature-projects',
  imports: [ ProjectCardComponent ],
  templateUrl: './feature-projects.component.html',
  styleUrl: './feature-projects.component.scss'
})
export class FeatureProjectsComponent {

  projects = [
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
    // TODO: Node-code Canvas
    // TODO: EDM Editor
    // TODO: Data Lineage
    // TODO: Embedded Tableau Report
    // TODO: SQL Flow
  ];
}
