import { Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/user.service';
import { User } from '../share/user.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public userData:object = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserData()
      .subscribe(data =>
        {
          //console.log(data);
          this.userData = data;
          console.log(this.userData);
        },
      err=>{
        console.log(err);
      });
  }

}
