import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  stackList: string[] = [
    'Angular',
    'React',
    'Scss',
    'Jasmine',
    'karma',
    'Selenium',
    'Redux',
    'NgRx',
    'TypeScript',
    'JavaScript',
    'NodeJs',
    'Express.js',
    'Koa.js',
    'pm2',
    'Java',
    'Spring Boot',
    'MSSQL',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
  ];
}
