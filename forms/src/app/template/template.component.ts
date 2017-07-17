import { Component, OnInit } from '@angular/core';
import { SEHAlert } from '../models/sehalert';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  public sehAlert: SEHAlert;

  levels = [
    {value: 'A1', viewValue: 'A1'},
    {value: 'A2', viewValue: 'A2'},
    {value: 'B1', viewValue: 'B1'},
    {value: 'B2', viewValue: 'B2'},
    {value: 'C1', viewValue: 'C1'},
    {value: 'C2', viewValue: 'C2'},
    {value: 'D1', viewValue: 'D1'},
    {value: 'D2', viewValue: 'D2'}
  ];

  constructor() { 
    this.sehAlert = new SEHAlert();
  }
}
