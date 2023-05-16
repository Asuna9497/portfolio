import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'RETAIL-PHARMACY APPLICATION',
      technologies: 'JAVA, MS SQL server, Swing',
      description: [
        'Worked as a Java backend developer to develop desktop based app',
        'It is a desktop-based pharmacy application that uses JAVA, MS SQL server and swing framework.',
        'It had a local DB (MS SQL server) and a central DB as a mainframe.',
        'It was built with 3-Layer Architecture, database connections, design patterns.',
        'XMLs are used as a communication mediums between DB and Mainframe',
        'Implemented functionalities by consuming  API responses which were in JSON format',
        'Tools used: Eclipse, MS SQL server, Postman, Azure DevOps dashboard, Git',
      ],
    },
    {
      title: 'DIGITAL BOOK MANAGEMENT APPLICATION',
      technologies: 'JAVA, Spring boot, Mockito, Microservices, Angular',
      description: [
        'Worked as a Java full stack developer to build web based application',
        'It is a digital book management full-stack' +
          'web application used for Purchasing/Reading books and Registering a book' +
          'with two user roles such as reader (can sign in, register, read a purchased book, and purchase a book)' +
          ' & author (can sign in, register, create a book, and mark the book as active.)',
        'For the backend technologies used are : Java, MySQL, spring boot, microservices, and Mockito. ',
        'For frontend development technologies used are:  typescript, and angular 8',
        'Designed rest endpoints',
        'Used swagger for API documentation',
        'Written JUnit for unit testing',
        'Created UI framework (developed a front-end application using Angular 8)',
        'Enabled JWT authorization for application security and for the ability to interact with multiple APIS and databases.',
        'Created remote databases, server instances and lambda instance using AWS',
        'Tools used: STS, postman, VS code, git',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
