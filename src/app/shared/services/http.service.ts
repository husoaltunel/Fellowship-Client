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

  get(path: string,responseType? : object) : Observable<any>{
    return this.http.get(this.url.concat(path),responseType)
  }
  post(path: string, model: any) : Observable<any> {
    return this.http.post(this.url.concat(path), model)
  }
  put(path : string,model : any) : Observable<any>{
    return this.http.put(this.url.concat(path), model)
  }
  delete(path : string,id : number) : Observable<any>{
    return this.http.delete(this.url.concat(path).concat(id.toString()))
  }

}
