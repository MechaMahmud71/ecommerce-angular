import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { HeroComponent } from 'src/app/components/home/hero/hero.component';
import { CategoryComponent } from 'src/app/components/home/category/category.component';
import { BannerComponent } from 'src/app/components/home/banner/banner.component';




@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoryComponent,
    BannerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "", component: HomeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeModule { }
