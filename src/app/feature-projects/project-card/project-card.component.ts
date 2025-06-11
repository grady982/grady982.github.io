import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  name = input.required<string>();
  description = input.required<string>();
  imageUrl = input.required<string>();
  link = input.required<string>();

}
