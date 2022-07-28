import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public errorMessage = new BehaviorSubject<string>("");

  constructor() { }

  setMessage(message: string) {
    // console.log(message)
    this.errorMessage.next(message);
  }
  closeMessage() {
    this.errorMessage.next("");
  }
}
