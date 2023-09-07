import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Observable} from 'rxjs'
import { userInterface } from 'src/app/model/userInterface';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit{
  userData$!:Observable<userInterface[]>
  name!:string;
  company!:string;
  designation!:string;
constructor(private user:UserService){}
ngOnInit(): void {
  this.getData()
}
getData(){
 this.userData$ = this.user.getUsedata()
}
}
