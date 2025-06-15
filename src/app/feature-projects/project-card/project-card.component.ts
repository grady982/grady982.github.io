import { Component, input, output } from '@angular/core';

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

  onView = output<void>();

  onClick() {
    this.onView.emit();
  }

}
