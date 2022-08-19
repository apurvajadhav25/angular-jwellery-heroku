import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, FormControlDirective, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessengerService } from 'src/app/services/messenger.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userDetailForm!: UntypedFormGroup;
  clickEventSubscription: Subscription | undefined;
  value: string =  ""
  data: any
  id: any
  supportLanguages = ['english', 'bangla', 'marathi', 'hindi'];

  constructor(private messengerService: MessengerService,
              private registerService: RegisterService) { }

  ngOnInit(): void {
    this.clickEventSubscription= this.messengerService.getLogin().subscribe((user)=>{
      this.value = user
      console.log("success")
     
   })
   this.getUserDetail()

    
    
    this.userDetailForm = new UntypedFormGroup({
      username: new UntypedFormControl('',  Validators.required),
      //name: new FormControl(''),
      emailId: new UntypedFormControl(''),
      password: new UntypedFormControl('',Validators.required),
      mobileNumber: new UntypedFormControl(''),
      language: new UntypedFormControl(''),
      //id: new FormControl(this.id)
  });
    
  
}

  getUserDetail(){
    this.registerService.getUserDetailByUsername(this.value).subscribe((data)=>{
      this.data = data
      this.id = data.id
      console.log(this.data)
      
    })

  }

  onSubmit() {
    this.registerService.editUserDetail(this.userDetailForm?.value).subscribe((data)=>{

    })
  }

}
