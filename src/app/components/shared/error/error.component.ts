import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  // @Input() message!: string;
  private subscription!: Subscription;

  public message: string = "";

  public timeOut: any;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.subscription = this.errorService.errorMessage.subscribe(message => {
      this.message = message;
      this.timeOut = setTimeout(() => {
        this.onClose();
      }, 5000)
    })
  }

  onClose(): void {
    clearTimeout(this.timeOut)
    this.errorService.closeMessage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
