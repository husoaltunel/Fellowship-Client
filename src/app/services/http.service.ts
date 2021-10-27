import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  get(path: string) : Observable<any>{
    return this.http.get(this.url + path)
  }
  post(path: string, model: any) : Observable<any> {
    return this.http.post(this.url + path, model)
  }

}
