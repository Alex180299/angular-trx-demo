import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartModule,
    CardModule,
    ButtonModule,
  ],
  exports: [
    ChartModule,
    CardModule,
    ButtonModule
  ]
})
export class PrimengModule { }
