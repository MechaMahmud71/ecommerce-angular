import { NgModule } from '@angular/core';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { SharedModule } from '../shared/shared.module';

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
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }
