import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-signal',
  templateUrl: './traffic-signal.component.html',
  styleUrl: './traffic-signal.component.scss'
})
export class TrafficSignalComponent implements OnInit {
public signalRedBgClass =  'bg-red'
public signalGreenBgClass =  'bg-green-light'
public signalYellowBgClass =  'bg-yellow-light'

  ngOnInit(): void {
   this.showSignal()
  }

  showSignal(){
    setTimeout(()=>{
      this.signalRedBgClass = 'bg-red-light' 
      this.signalGreenBgClass = 'bg-green signal-active'
      this.signalYellowBgClass = 'bg-yellow-light'
      setTimeout(()=>{
        this.signalRedBgClass = 'bg-red-light' 
        this.signalGreenBgClass = 'bg-green-light'
        this.signalYellowBgClass = 'bg-yellow signal-active'
        setTimeout(() => {
          this.signalRedBgClass = 'bg-red signal-active' 
          this.signalGreenBgClass = 'bg-green-light'
          this.signalYellowBgClass = 'bg-yellow-light'
          this.showSignal() 
         },5000);
      },3000)
    },5000)
  }
}
