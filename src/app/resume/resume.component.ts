import { Component } from "@angular/core";
import { AboutComponent } from "./components/about/about.component";
import { AchievementsComponent } from "./components/achievements/achievements.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { TechStackComponent } from "./components/tech-stack/tech-stack.component";
import { FeatureProjectsComponent } from "./components/feature-projects/feature-projects.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: "app-home",
  imports: [
    AboutComponent,
    AchievementsComponent,
    ExperienceComponent,
    TechStackComponent,
    FeatureProjectsComponent,
    ContactComponent,
  ],
  templateUrl: "./resume.component.html",
  styleUrl: "./resume.component.scss",
})
export class ResumeComponent { }
