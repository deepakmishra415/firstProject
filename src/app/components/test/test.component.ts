import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  
  filterKey: string = '';

  public ogUsers = ['Deepak', 'Ashish', 'Rohan', 'Ramesh', 'Mishra', 'Mehta'];
  public users:any[] = []

  constructor() {

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
