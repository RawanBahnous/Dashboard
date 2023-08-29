import { Component } from '@angular/core';
import { ITasks } from 'src/Models/itasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent {

  Tasks:ITasks[] = [
    {startdate:9,
      searchURL:"www.URL.com",
      progressValue:24,
      comments:8
    },
    {
      startdate:3,
      searchURL:"www.URL.org",
      progressValue:60,
      comments:6
    },
  ];

  progressValue:number = 0;
  color:string="";
  updateProgressBar() {
  }
  Color() {
    for (let i = 0; i < this.Tasks.length; i++) {
      this.progressValue = this.Tasks[i].progressValue;
    if (this.progressValue < 25) {
      // return { 'background-color': 'babyblue' };
      this.color = 'babyblue';
    } else if (this.progressValue >= 25 && this.progressValue <= 60) {
      // return { 'background-color': 'purple' };
      this.color = 'purple';
    } else {
      // return { 'background-color': 'green' };
      this.color = 'green';
    }
    }
    return { 'background-color': this.color };

  }
}
