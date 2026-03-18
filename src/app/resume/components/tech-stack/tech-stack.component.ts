import { Component } from "@angular/core";

@Component({
  selector: "app-tech-stack",
  imports: [],
  templateUrl: "./tech-stack.component.html",
  styleUrl: "./tech-stack.component.scss",
})
export class TechStackComponent {
  stackList: string[] = [
    "Angular",
    "React",
    "Next.js",
    "Redux",
    "NgRx",
    "HTML",
    "CSS",
    "SCSS",
    "TypeScript",
    "JavaScript",

    "Jest",
    "React Testing Library",
    "Storybook",
    "Selenium",

    "Vite",
    "Webpack",
    "Git",
    "CI/CD pipelines",

    "Node.js",
    "Express.js",
    "Koa.js",
    "Java",
    "Spring Boot",
    "pm2",
    "MSSQL",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
  ];
}
