import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  traumas = [];

  levels = SEHLevels;
  traumaTypes = SEHTraumaTypes;
  genders = SEHGenders;
  startDate = new Date(1980, 0, 1);

  ngOnInit() {
    this.sehAlert = new SEHAlert();

    this.sehAlertForm = new FormGroup({
      level: new FormControl('', Validators.required),
      trauma: new FormControl('', Validators.required),
      patientName: new FormControl(''),
      gcs: new FormControl(''),
      birthDate: new FormControl(''),
      gender: new FormControl('')
    });
  }

  onSubmit(form) {
    this.traumas.unshift(form._value);
    this.sehAlert = new SEHAlert();
    this.sehAlertForm.reset();
  }
}
