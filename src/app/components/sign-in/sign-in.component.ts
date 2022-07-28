import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Auth } from 'src/app/core/Interfaces/models/auth.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  public isLogging = false;
  private subscription!: Subscription;
  public error: string = "";


  constructor(private authService: AuthService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.subscription = this.errorService.errorMessage.subscribe(message => {
      if (message) {
        this.error = message
      } else {
        this.error = ""
      }
    })
  }

  onSubmit(form: NgForm) {
    this.isLogging = true;
    this.authService.login(form.value).subscribe({
      next: (res: Auth) => {
        this.isLogging = false;
        this.error = "";
      },
      error: (error) => {
        this.isLogging = false;
        this.errorService.setMessage(error.error)
      }
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
