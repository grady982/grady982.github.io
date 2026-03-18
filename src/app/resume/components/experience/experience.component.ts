import { Component } from "@angular/core";

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  itemList: string[];
}

@Component({
  selector: "app-experience",
  imports: [],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: "Delta Electronics",
      position: "Senior Software Engineer",
      startDate: "2025-09-01",
      endDate: "Present",
      itemList: [
        `Built an <b>image converter web application</b> using Claude Code to convert project PNG assets to WebP, improving image loading performance.`,
        `Leveraged <b>Figma MCP</b> to accelerate UI development, reducing manual HTML/CSS coding and improving design-to-code efficiency.`,
        `Developed an <b>SQL Flow visualization component</b> with Cytoscape.js to display data flow in interactive graphs.`,
      ],
    },
    {
      company: "Webcomm",
      position: "Senior Software Engineer",
      startDate: "2023-01-01",
      endDate: "2025-08-31",
      itemList: [
        `Led the <b>Frontend team</b> to refactor the Standard Chartered online application platform within three months, managing system analysis, documentation, and deployment.`,
        `Spearheaded <b>CDP frontend development</b>, delivering a high-quality user interface; product awarded the <b>2024 Taiwan Excellence Award</b>.`,
        `Developed a <b>reusable Angular UI library</b> compatible with versions 12–16, helping four project teams <b>reduce new project setup time by 80%</b>.`,
        `<b>Led Angular training sessions</b> at FISC, covering core framework concepts and best practices.`,
        `Implemented <b>AI Meeting Assistant</b> MVP in one week to utilize the whisper model and text
        generation model from OpenAI.`,
        `Plenty of open source customizing and extending functionality experience to achieve the
        product needed, like: EDM editor, Node Code canvas, Data Lineage, etc.`,
      ],
    },
    {
      company: "Wistron",
      position: "Software Engineer (Fullstack)",
      startDate: "2021/05",
      endDate: "2023/01",
      itemList: [
        `Developed frontend using <b>React</b> and <b>Ant Design</b>, with <b>Redux</b> as the data flow center to ensure high website performance.`,
        `Optimized FlyingWheel frontend performance with <b>React hooks</b> (<b>useMemo</b>, <b>useCallback</b>) to reduce WebSocket update bottlenecks.`,
        `Supported team members in writing <b>Jest unit tests</b>, increasing test coverage to 60%.`,
        `Developed <b>SQL Server stored procedures</b> on BOM management platform to generate daily customer reports.`,
      ],
    },
    {
      company: "ISchool",
      position: "Software Engineer (Fullstack)",
      startDate: "2017/07",
      endDate: "2021/05",
      itemList: [
        `Developed the <b>Hualien Education web application</b> based on UI designs and specifications,
        using Angular with Material Design for the frontend, Node.js with Express for the backend,
        and PostgreSQL for the database. Managed the deployed runtime instance with PM2.`,
      ],
    },
  ];
}
