import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from 'src/app/components/shared/error/error.component';
import { NavComponent } from 'src/app/components/shared/nav/nav.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    ErrorComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    CommonModule,
    ErrorComponent,
    NavComponent,
    SwiperModule
  ]
})
export class SharedModule { }
