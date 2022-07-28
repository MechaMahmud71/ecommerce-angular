import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Auth } from '../Interfaces/models/auth.interface';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../Interfaces/models/user.interface';
import { loginFormData } from '../Interfaces/formData/login.interface';
import { signupFormData } from '../Interfaces/formData/signup.interface';

const API_END_POINT = environment.apiBaseLink + "/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = errorRes.error;
    return throwError(() => errorMessage)
  }

  login(obj: loginFormData): Observable<Auth> {
    return this.http.post<Auth>(API_END_POINT + '/login', obj).pipe(
      catchError(this.handleError),
      tap((res: Auth) => {
        this.handleAuthData(res);
      })
    )
  }

  signUp(obj: signupFormData): Observable<Auth> {
    return this.http.post<Auth>(API_END_POINT + '/registration', obj).pipe(
      catchError(this.handleError),
      tap((res: Auth) => {
        this.handleAuthData(res);
      })
    )
  }

  private handleAuthData(obj: (Auth | any)): void {
    const expiresIn = 30;
    const { token, data: user } = obj;
    // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    this.storeToken(token);
    this.storeUser(user);
    this.autoLogout(expiresIn * 1000);
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  storeUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }


  autoLogout(expirationDate: number) {
    setTimeout(() => {
      this.logout();
    }, expirationDate)
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  autoLogin() {
    const token = localStorage.getItem('token');
    if (!token) return;
    this.autoLogout(30 * 1000);
  }

  getToken() {
    return localStorage.getItem('token');
  }



}
