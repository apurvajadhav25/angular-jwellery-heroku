import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from '../services/checkout/checkout.service';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: UntypedFormGroup;

  constructor(private service: CheckoutService,
               private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = new UntypedFormGroup({
      firstname: new UntypedFormControl('',  Validators.required),
      lastname: new UntypedFormControl('',  Validators.required),
      buildingname: new UntypedFormControl('',  Validators.required),
      area: new UntypedFormControl(''),
      landmark: new UntypedFormControl(''),
      city: new UntypedFormControl('',  Validators.required),
      state: new UntypedFormControl('',  Validators.required),
      emailId: new UntypedFormControl('', Validators.required),
      mobilenumber: new UntypedFormControl('',  Validators.required),
  });
}

onSubmit() {
  this.service.payment(this.checkoutForm?.value).subscribe(data=>{
    this.ngOnInit();
    console.log(data);
  });
  this.router.navigateByUrl('/login')
  //this.getJewelleries();
  //this.display=false;
}

}
