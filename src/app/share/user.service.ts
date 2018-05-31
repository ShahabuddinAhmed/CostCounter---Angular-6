import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = "http://localhost:8000/api/home";
  //private _url: string = "assets/data/data.json";
  constructor(private http: HttpClient) { }


  registerUser(user: User) {
    const body: User = {
      name: user.name,
      email: user.email,
      phon: user.phon,
      address: user.address,
      password: user.password
    }
    return this.http.post(this._url + 'http://localhost:4200/register', body);
  }
  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }
}
