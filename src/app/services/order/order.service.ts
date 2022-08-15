import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  username: any = sessionStorage.getItem('username');

  constructor(private http: HttpClient) { }

  addOrder(address: any, cost: number ) {
    return this.http.get('https://springboot-jwellery.herokuapp.com/ordersByUsername', {params:{
      username: this.username,
      address: address,
      cost: cost
    }
  });
  }

  getOrder() {
    return this.http.get('https://springboot-jwellery.herokuapp.com/ordeByUserDetailId', {params:{
      username: this.username
    }
  });
  }
}
