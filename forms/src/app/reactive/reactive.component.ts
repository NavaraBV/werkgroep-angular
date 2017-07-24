import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SEHAlert } from '../models/sehalert';
import { SEHLevels, SEHTraumaTypes, SEHGenders } from '../models/constants';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public sehAlert: SEHAlert;
  public sehAlertForm: FormGroup;
  public levels = SEHLevels;
  public traumaTypes = SEHTraumaTypes;
  public genders = SEHGenders;

  ngOnInit() {
    this.sehAlert = new SEHAlert();

    this.sehAlertForm = new FormGroup({
      level: new FormControl(''),
      trauma: new FormControl(''),
      patientName: new FormControl(''),
      gcs: new FormControl(''),
      birthDate: new FormControl(''),
      gender: new FormControl('')
    });
  }

}
