import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from 'src/app/components/error/error.component';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CommonModule,
    ErrorComponent
  ]
})
export class SharedModule { }
