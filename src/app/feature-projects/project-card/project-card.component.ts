import { Component, input, output } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  linkeText: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  project = input.required<Project>();
  onView = output<void>();

  onClick() {
    this.onView.emit();
  }

}
