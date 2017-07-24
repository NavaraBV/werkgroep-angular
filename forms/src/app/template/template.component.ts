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

  constructor() { 
    this.sehAlert = new SEHAlert();
  }

  onSubmitForm(event) {

  }
}
