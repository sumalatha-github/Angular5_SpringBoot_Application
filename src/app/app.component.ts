import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import {Users} from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'loginApplication';
  userData:any;
  formUserData;
  saveData:String;

  constructor(private loginService:LoginServiceService){}
  ngOnInit(){

    this.formUserData = new FormGroup({
      email: new FormControl(''),
      first_name:new FormControl(''),
      last_name: new FormControl('')

    })
  }


  onClickSubmit(){
    this.loginService.getUsers().subscribe(data=> {
      this.userData = data;
      console.log("User Data is ----",this.userData);
      this.userData = this.userData;
    })
    
  }

  createUserDtl(userFormData:Users[]){
    console.log("user data in component---",this.formUserData.value);
    this.loginService.saveUserDtl(this.formUserData.value).subscribe(response=>{
      console.log("save response",response);
      if(response !== '')
      this.saveData = "Data Added sucessfully";
    })
  }

  
}
