import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Engineering Lead',
      company: 'persistent System',
      duration: 'May 2023 - Now',
      description: [
        'Working in telecom domain on web applications',
        'Working as Java full stack developer.',
      ],
    },
    {
      role: 'Software engineer',
      company: 'Cognizant',
      duration: 'Aug 2022 - May 2023',
      description: [
        'Involved in scrum ceremonies and implemetation of business requirements',
        'Web based applications in retail domain',
      ],
    },
    {
      role: 'System Engineer',
      company: 'TCS',
      duration: 'Sep 2018 - Aug 2022',
      description: [
        'Worked as Java Backend Developer',
        'Worked on Development of desktop based pharmacy applications',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
