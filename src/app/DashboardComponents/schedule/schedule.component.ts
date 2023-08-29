import { Component } from '@angular/core';
import { IMessages } from 'src/Models/imessages';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styles: [
  ]
})
export class ScheduleComponent {
  emogis = [
    '😃', '🥳', '🎉', '🚀','🌟','😃', '🥳', '🎉', '🚀','🌟','😃',
  ]

  messages:IMessages[] = [
    {
      name:"Yassin Mustafa",
      imgSrc:"assets/images/5.jpg",
      text:"hi angelina!How Are you?",
    },
    {
      name:"Muhammed Mustafa",
      imgSrc:"assets/images/2.jpg",
      text:"aowsome design!!",
    },
    {
      name:"Omar Mustafa",
      imgSrc:"assets/images/3.jpg",
      text:"do you need that design?",
    },
    {
      name:"Ahmed Mustafa",
      imgSrc:"assets/images/6.jpg",
      text:"what is the price of hourly job bla bla bla",
    },
  ];
}
