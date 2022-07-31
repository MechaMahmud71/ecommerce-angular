import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from 'src/app/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/auth/sign-up/sign-up.component';
import { AuthComponent } from 'src/app/pages/auth/auth.component';

const authRoutes: Routes = [
  {
    path: "", component: AuthComponent, children: [
      {
        path: "sign-up", component: SignUpComponent
      },
      {
        path: "sign-in", component: SignInComponent
      }
    ]
  },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
