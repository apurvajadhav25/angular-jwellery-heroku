import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  orders: any;
  myArray1: any= [];
  myArray2: any= [];
  data: any;


  constructor(private orderService: OrderService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe((data: any)=>{
      this.orders = data

      this.myArray1 = this.orders[0].productIds.split(',');
      for(let i=0;i<this.myArray1.length;i++)
      { 
         this.productService.getById(this.myArray1[i]).subscribe((data)=>{
          this.data = data
          this.myArray2.push(this.data.imagePath)
          
         })
         
         console.log(this.myArray2)
      }
      // this.myArray = data[0].productIds.split(',')
       //this.productService.getById(6).subscribe((data)=>{
        //this.orders = data
    // }
     //)
    
    })
  }

}
