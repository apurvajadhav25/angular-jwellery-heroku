import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  payment(data: any) {
    console.log("in put")
    return this.http.put('https://springboot-jwellery.herokuapp.com/userDetail'+'/'+data.id, data);
  }
}
