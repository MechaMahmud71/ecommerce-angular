import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  {
    path:"auth",loadChildren:()=>import("../../modules/auth/auth.module").then(m=>m.AuthModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
