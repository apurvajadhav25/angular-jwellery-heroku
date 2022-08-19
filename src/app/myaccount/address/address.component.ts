import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address/address.service';
import {DialogModule} from 'primeng/dialog';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order/order.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private addressService: AddressService,
              private orderService: OrderService,
              private sharedService: SharedService) { }

  addresses: any;
  display: boolean = false;
  edit: boolean = false;
  addressForm!: UntypedFormGroup;
  id: any;
  address: string = '';
  name: string = '';
  mobileNumber: string = '';
  selectedAddress: any;
  selectedValue: any = null;
  cartItems: any;
  cartTotal: any;
  discountTotal: any;
  subTotal: number = 0;

  ngOnInit(): void {
    this.sharedService.getProducts().subscribe(res=>{
    this.cartItems = res;
    this.cartTotal = 0
  this.cartItems.forEach((item: {  qty: number; price: number; discount: number }) => {
  this.cartTotal +=  (item.qty * item.price)
  this.discountTotal = item.discount * item.qty
 })
 this.subTotal = this.cartTotal - this.subTotal;
    })

    this.addressForm = new UntypedFormGroup({
      address: new UntypedFormControl(''),
      name: new UntypedFormControl(''),
      mobileNumber: new UntypedFormControl('')
     
  });
    this.getProducts()
    this.selectedValue = this.addresses[1];
  }

  getProducts(){
    this.addressService.getAddressByUsername().subscribe(res=>{
      this.addresses = res;
      
    })
  }

  removeItem(item: any){
    this.addressService.deleteAddress(item).subscribe(()=>{
    this.ngOnInit()
    })
  }

  show(){
    this.display = true;
    
  }

  onSubmit(){
    this.addressService.addAddress(this.addressForm?.value).subscribe(data=>{
      this.ngOnInit();
      console.log(data);
    });
    this.getProducts();
    this.display = false;
  }

  editItem(item: any){
    this.address = item.address;
    this.name = item.name;
    this.mobileNumber = item.mobileNumber;
    this.edit = true;
    this.id = item.id
  }

  onEdit(){
    this.addressService.editAddress(this.addressForm?.value, this.id).subscribe(data=>{
      this.ngOnInit();
      console.log(data);
    });
    this.getProducts();
    this.edit = false;
  }

  order(){
    this.orderService.addOrder(this.selectedAddress, this.subTotal).subscribe(()=>{

    })
  }

  selectRadio(data: any){
    this.selectedAddress = data.address
  }

  

}
