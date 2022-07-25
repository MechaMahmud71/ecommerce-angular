import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
    if (this.router.url === "/auth") {
      this.router.navigate(['auth/sign-in'])
    } else if(this.router.url==="/auth/sign-up") {
      this.router.navigate(['auth/sign-up'])
    }
  }
}
