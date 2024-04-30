import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit {
  constructor(private router: Router){

  }

  timer :number= 0
  defaultTimer = 10
  timeInterval:any = ''
  
  ngOnInit(): void {
    this.setTimer()
  }

  setTimer(){
    this.timer = this.defaultTimer
    this.timeInterval = setInterval(()=>{
      if(this.timer === 0) {
        this.timeInterval.stop()
      } else {
        this.timer-=1
      }
    },1000)
  }

  resetTimer(){
  this.router.navigateByUrl('/traffic')
    if(this.timer != 0)
      this.timer = this.defaultTimer
  }
}
