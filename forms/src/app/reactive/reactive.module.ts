import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewModule } from '../preview/preview.module';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveComponent } from './reactive.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PreviewModule
  ],
  declarations: [ ReactiveComponent ]
})
export class ReactiveModule { }
