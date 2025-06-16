import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { FeatureProjectsComponent } from '../feature-projects/feature-projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent, AchievementsComponent, ExperienceComponent, 
    TechStackComponent, FeatureProjectsComponent, ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
