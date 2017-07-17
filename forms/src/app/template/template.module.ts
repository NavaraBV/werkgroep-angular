import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewModule } from '../preview/preview.module';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule,
    FormsModule,
    PreviewModule
  ],
  declarations: [ TemplateComponent ]
})
export class TemplateModule { }
