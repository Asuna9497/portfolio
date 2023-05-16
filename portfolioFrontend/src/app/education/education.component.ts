import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Mahatma Gandhi Vidyalaya, Umbraj',
      course: 'SSC',
      duration: '2010-2011',
      score: '92.36%',
    },
    {
      institute: 'Mahatma Gandhi Junior college, Umbraj',
      course: 'HSC',
      duration: '2013-2014',
      score: '76.77%',
    },
    {
      institute: 'Annasaheb Dange College Of engineering and technology, Ashta',
      course: 'B.E, Mechanical',
      duration: '2014-2018',
      score: '72.29%',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
