import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  username: any = sessionStorage.getItem('username');

  constructor(private http: HttpClient) { }

  getAddressByUsername(): Observable<any>{
    return this.http.get<any>('https://springboot-jwellery.herokuapp.com/addressByUsername',{
      params:{
        username: this.username
      }
    })
  }

  deleteAddress(data: any) {
    console.log(data.id)
    return this.http.delete('https://springboot-jwellery.herokuapp.com/address'+'/'+data.id);
  }

  addAddress(data: any) {
    return this.http.post('https://springboot-jwellery.herokuapp.com/address', data, {params:{
      username: this.username
    }});
  }

  editAddress(data: any,id: number) {
    return this.http.put('https://springboot-jwellery.herokuapp.com/address/'+id, data);
  }

}
