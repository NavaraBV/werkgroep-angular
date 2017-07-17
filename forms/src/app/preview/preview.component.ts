import { Component, OnInit, Input } from '@angular/core';
import { SEHAlert } from '../models/sehalert';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() public sehAlert: SEHAlert;

  constructor() { }

  ngOnInit() { }

}
