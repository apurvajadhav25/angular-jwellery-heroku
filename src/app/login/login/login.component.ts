import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  res: any;
  userDetailForm!: UntypedFormGroup;
  constructor(private registerService: RegisterService,
              private router: Router,
              private messengerService: MessengerService) { }

  ngOnInit(): void {
    this.userDetailForm = new UntypedFormGroup({
      username: new UntypedFormControl(''),
      password: new UntypedFormControl('')
     
  });
  }

  onSubmit() {
    console.log(this.userDetailForm?.value.username)
    this.registerService.checkLogin(this.userDetailForm?.value.username, this.userDetailForm?.value.password)
    .subscribe((data)=>{
      if(data){
        sessionStorage.setItem('username', this.userDetailForm?.value.username)
        this.messengerService.sendLogin(this.userDetailForm?.value.username)
        this.router.navigateByUrl('/shoping-cart')
      }
   })
   /* this.registerService.getUserDetail().subscribe((data)=>{
      console.log(data)
      for(let i=0;i<data.length;i++){
        if(this.userDetailForm?.value.username == data[i].username && this.userDetailForm?.value.password == data[i].password ){
          this.messengerService.sendLogin(data[i].username)
          this.router.navigateByUrl('/shoping-cart')
          break;
        }
        
      }
      

    })*/
   
  }



  
  
}
