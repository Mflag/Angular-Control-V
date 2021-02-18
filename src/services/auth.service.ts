import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI = 'http://localhost:3000/api';

constructor(private http: HttpClient, private router: Router) { }

singUp(user: any) {

  console.log(this.http)

  return this.http.post<any>(this.URI + '/singUp', user);

}

}
