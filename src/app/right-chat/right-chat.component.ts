import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-right-chat',
  templateUrl: './right-chat.component.html',
  styleUrls: ['./right-chat.component.css']
})
export class RightChatComponent implements OnInit {
  constructor(public datepipe: DatePipe) { }
  @Input() chat: any;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() closeThread = new EventEmitter<string>();
  value = '';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
    ngOnInit() {
  }
  onCloseThread() {
    this.closeThread.emit();
  }
  onEnter(value: string) {
    if (this.value) {
      this.newItemEvent.emit(this.value);
      this.value = '';
    }

}

}
