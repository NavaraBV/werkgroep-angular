import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SEHAlert } from '../models/sehalert';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public sehAlert: SEHAlert;
  public sehAlertForm: FormGroup;
  public levels = [
    {value: 'A1', viewValue: 'A1'},
    {value: 'A2', viewValue: 'A2'},
    {value: 'B1', viewValue: 'B1'},
    {value: 'B2', viewValue: 'B2'},
    {value: 'C1', viewValue: 'C1'},
    {value: 'C2', viewValue: 'C2'},
    {value: 'D1', viewValue: 'D1'},
    {value: 'D2', viewValue: 'D2'}
  ];

  ngOnInit() {
    this.sehAlert = new SEHAlert();

    this.sehAlertForm = new FormGroup({
      level: new FormControl('A1')
    });
  }

}
