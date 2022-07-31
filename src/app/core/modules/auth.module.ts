import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';


import { AuthRoutingModule } from '../routes/auth-routing.module';
import { SignInComponent } from 'src/app/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/auth/sign-up/sign-up.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AuthModule { }
