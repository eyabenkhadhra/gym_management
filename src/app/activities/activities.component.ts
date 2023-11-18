import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  activities: any[] = [
    {
      name: 'Gymnastics',
      image: 'assets/images/gymnast.png',
      description: 'Gymnastics is a sport discipline that emphasizes strength, flexibility, coordination and agility.'
    },
    {
      name: 'Strength Training',
      image: 'assets/images/musculation.png',
      description: 'Strength training is a form of physical exercise that focuses on developing and strengthening the muscles of the body.'
    },
    {
      name: 'Cardio Training',
      image: 'assets/images/cardio.png',
      description: 'Cardio training, also known as cardiovascular training or aerobic training, is a form of exercise focused on strengthening the cardiovascular system and promoting cardiorespiratory health.'
    }
    // Add more activities as needed
  ];

}
