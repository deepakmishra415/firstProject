import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  
  filterKey: string = '';

  public ogUsers = ['Deepak', 'Ashish', 'Rohan', 'Ramesh', 'Mishra', 'Mehta'];
  public users:any[] = []

  constructor(public userService:UserService){
    console.log(userService.count++)

  }

  ngOnInit() {
    this.users = [...this.ogUsers]
    
  }

  applyFilter() {
    this.users = this.ogUsers.filter((user)=> {
      return user.toLowerCase().includes(this.filterKey.toLowerCase().trim())
    })
  }

}
