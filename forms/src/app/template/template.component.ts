import { Component, OnInit } from '@angular/core';
import { SEHAlert } from '../models/sehalert';
import { SEHLevels, SEHTraumaTypes, SEHGenders } from '../models/constants';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  public sehAlert: SEHAlert;

  levels = SEHLevels;
  traumaTypes = SEHTraumaTypes;
  genders = SEHGenders;
  startDate = new Date(1980, 0, 1);

  constructor() { 
    this.sehAlert = new SEHAlert();
  }

  onSubmit(form) {
    console.log(form);
  }
}
