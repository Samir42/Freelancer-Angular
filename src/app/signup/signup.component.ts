import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  // user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }



  onSubmit(email: string, password: string) {
    // const user: User = { email, password } as User;

    // this.userService.postUser(user).subscribe(
    //   res=> {
    //     console.log(res);
    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // );
  }


  resetForm(form?:NgForm)
  {
    // form.resetForm();
    // this.userService.user = {
    //   email:'',
    //   password:''
    // }
  }
}
