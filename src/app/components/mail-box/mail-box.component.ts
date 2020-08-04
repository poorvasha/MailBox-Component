import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IObjects } from '../../../Interfaces/MailBoxInterface';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss'],
})
export class MailBoxComponent implements OnInit {

  constructor() { }

  // to get objects for homepage
  @Input() content : IObjects;

  // to send delete function to homepage
  @Output() delete = new EventEmitter();

  ngOnInit() {}

  // function to delete mail
  deleteMail(){
    // delete property with emit funtion parameter and the value is object.
    this.delete.emit(this.content);
  }
}
