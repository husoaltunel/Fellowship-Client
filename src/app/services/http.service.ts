import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuthModel } from '../models/userAuth.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user : UserAuthModel  = JSON.parse(localStorage.getItem("user") || JSON.stringify(new UserAuthModel()))
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.user.accessToken.token}` })
  }
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  get(path: string) {
    return this.http.get(this.url + path, this.httpOptions)
  }
  post(path: string, model: any) {
    return this.http.post(this.url + path, model, this.httpOptions)
  }

}
