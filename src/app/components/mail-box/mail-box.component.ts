import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss'],
})
export class MailBoxComponent implements OnInit {

  constructor() { }

  @Input() content;

  ngOnInit() {}
}
