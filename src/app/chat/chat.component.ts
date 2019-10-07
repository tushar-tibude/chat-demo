import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public datepipe: DatePipe) { }
  value = '';
  chat =  [];
  currentMsg = null;
  index = null;
    ngOnInit() {
  }

  onEnter(value: string) {
    if (this.value) {

    this.chat.push({
    timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm a'),
    child: [],
    text: this.value
  });
    this.value = '';
}
}


addChildItem(value: string) {
  this.chat[this.index].child.push({
  timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm a'),
  text: value
});
}

closeThread(value: string) {
  this.index = null;
  this.currentMsg = null;
}

onSelectChat(msg, i) {
  this.index = i;
  this.currentMsg = msg;
}

}
