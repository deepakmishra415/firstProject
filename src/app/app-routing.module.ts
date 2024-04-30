import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { TestComponent } from './components/test/test.component';
import { TrafficSignalComponent } from './components/traffic-signal/traffic-signal.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TimerComponent } from './components/timer/timer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },

  { path: 'test', component:TestComponent },
  { path: 'traffic', component:TrafficSignalComponent },
  { path: 'users', component:UserDetailComponent },
  { path: 'timer', component: TimerComponent },

  { path: '**', component:SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
