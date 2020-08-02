import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss'],
})
export class MailBoxComponent implements OnInit {

  constructor() { }

  @Input() content;

  @Output() deleteEvent = new EventEmitter();

  ngOnInit() {}

  deleteMail(){
    this.deleteEvent.emit(this.content);
  }
}
