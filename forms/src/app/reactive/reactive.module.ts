import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveComponent } from './reactive.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ],
  declarations: [ReactiveComponent]
})
export class ReactiveModule { }
