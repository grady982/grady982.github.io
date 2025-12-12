import { Component } from '@angular/core';

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  itemList: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Webcomm',
      position: 'Senior Software Engineer',
      startDate: '2023-01-01',
      endDate: 'Present',
      itemList: [
        `Leading the Frontend team to refactor the Standard Chartered online application platform in
        three months, from system analytics, writing the document to deployment.`,
        `Leading CDP frontend development and committed to delivering a high-quality user interface.
        Additionally, this product received a 2024 Taiwan Excellence Award.`,
        `Developed a reusable Angular repository featuring numerous valuable components,
        compatible with Angular versions 12 to 16. This repository has already helped four project
        teams reduce new project setup time by 80%.`,
        `Lead Angular training sessions, teaching core concepts to developers at Taiwan Cooperative
        Bank.`,
        `Implement “AI Meeting Assistant” MVP in one week to utilize the whisper model and text
        generation model from OpenAI.`,
        `Plenty of open source customizing and extending functionality experience to achieve the
        product needed, like: EDM editor, Node Code canvas, Data Lineage, etc.`
      ]
    },
    {
      company: 'Wistron',
      position: 'Software Engineer (Fullstack)',
      startDate: '2021/05',
      endDate: '2023/01',
      itemList: [
        `Responsible for frontend development using React and the Ant Design component
        library,with Redux as the data flow center to ensure high website performance.`,
        `Responsible for FlyingWheel frontend development, with a particular focus on workbook
        functionality. Utilized React hooks, useMemo and useCallback, to prevent performance
        issues caused by WebSocket API.`,
        `Assisting team members with writing Jest unit tests and optimizing website performance.`,
        `Responsible for SQL Server stored procedure development on the BOM management
        platform to generate daily customer reports.`
      ]
    },
    {
      company: 'ISchool',
      position: 'Software Engineer (Fullstack)',
      startDate: '2017/07',
      endDate: '2021/05',
      itemList: [
        `Developed the Hualien Education web application based on UI designs and specifications,
        using Angular with Material Design for the frontend, Node.js with Express for the backend,
        and PostgreSQL for the database. Managed the deployed runtime instance with PM2.`
      ]
    }
  ];
}
