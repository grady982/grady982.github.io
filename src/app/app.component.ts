import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ExperienceComponent } from './experience/experience.component';
import { FeatureProjectsComponent } from './feature-projects/feature-projects.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    HeaderComponent, 
    AboutComponent, AchievementsComponent, ExperienceComponent, 
    TechStackComponent, FeatureProjectsComponent, ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grady982';
}
