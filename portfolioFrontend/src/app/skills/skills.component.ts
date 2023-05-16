import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 70,
    },
    {
      name: 'Springboot',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'Microservices',
      level: 'Intermidiate',
      rating: 55,
    },
    {
      name: 'HTML, CSS, TS',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'Angular',
      level: 'Expert',
      rating: 65,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
