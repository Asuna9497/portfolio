import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Priyanka Shinde'],
    ['DOB', '09/04/1997'],
    ['Work Experience', '4.6 years'],
    ['Education', 'B.E Mechanical(2018)'],
    ['Interests', 'Painting'],
  ];

  aboutMe: string[] = [
    'Hi, I am Java full stack developer with 4.6 years of experience in software industry.',
    'Worked as system engineer in TCS for desktop based pharmacy application with technologies - Java, swing, SQL.',
    'Worked as software engineer in Cognizant for various technologies(Java, springboot, microservices, Angular)',
    'Delivered all tasks within deadlines. Always egar to learn new technologies',
    'Currently, working as engineering lead in Persistent System',
  ];
}
