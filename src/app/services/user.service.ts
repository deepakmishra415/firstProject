import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/signin/signin.component';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  count: number = 0

  constructor(private http:HttpClient) { 
    this.count++
  }

  private handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error));
  }

  signin(user:User){
    let singinUrl = 'https://api.bizanalyst.in/user/signin?version=1&source=web'
    return this.http.post<User>(singinUrl,user)
  }
}
