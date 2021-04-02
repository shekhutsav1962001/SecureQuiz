import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class MsgboxComponent implements OnInit {

  @Input() message: any;
  @Input() styl:any
  constructor() { }


  ngOnInit(): void {
    $(document).ready(function () {
      $('.box').fadeOut(4000);
    });
  }

}
