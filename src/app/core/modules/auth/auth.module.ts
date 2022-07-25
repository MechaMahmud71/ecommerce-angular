import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/app/pages/auth/auth.component';

const authRoutes: Routes = [
  {
    path: "",component:AuthComponent,children: [
      {
        path:"sign-up",component:SignUpComponent
      },
      {
        path:"sign-in",component:SignInComponent
      }
    ]
  },

]

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],
  exports:[RouterModule]
})
export class AuthModule { }
