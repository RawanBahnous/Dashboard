import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmojiComponent, EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-donetasks',
  templateUrl: './donetasks.component.html',
  styles: [
  ],

})
export class DonetasksComponent {
  emoji: EmojiData = {
    id: 'smiley',
    name: 'Smiley',
    shortName: ':smiley:',
    shortNames: [':smiley:', ':)'],
    sheet: [64, 64],
    keywords: [],
    hidden: [],
    emoticons: [],
    text: '',
    skinVariations: []
  };
  // emojiFallback = (emoji: any, props: any) => (emoji ? `:${emoji.shortNames[0]}:` : props.emoji);

  onEmojiSelect(event: any) {
    console.log('Selected Emoji:', event.emoji);
  }

  handleEmojiClick(event: any) {
    console.log('Emoji clicked:', event.emoji);
    // You can perform actions with the selected emoji here
  }

}

