import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetailForm!: UntypedFormGroup;

  constructor(private service: RegisterService,
               private router: Router) { }

  ngOnInit(): void {
    this.userDetailForm = new UntypedFormGroup({
      username: new UntypedFormControl('',  Validators.required),
      //name: new FormControl(''),
      emailId: new UntypedFormControl(''),
      password: new UntypedFormControl('',Validators.required),
      mobileNumber: new UntypedFormControl(''),
      language: new UntypedFormControl(''), 
      
  });
}

onSubmit() {
  this.service.createUserDetail(this.userDetailForm?.value).subscribe(data=>{
    this.ngOnInit();
    console.log(data);
  });
  this.router.navigateByUrl('/login')
  //this.getJewelleries();
  //this.display=false;
}

}
