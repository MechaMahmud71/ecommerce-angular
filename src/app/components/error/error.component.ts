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

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.subscription = this.errorService.errorMessage.subscribe(message => {
      this.message = message;
    })
  }

  onClose(): void {
    this.errorService.closeMessage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
