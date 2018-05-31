import { UserService } from './../share/user.service';
import { User } from './../share/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User;
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
     this.userservice.registerUser(form.value)
     .subscribe((data) => {

  });

}

}
