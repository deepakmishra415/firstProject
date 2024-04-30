import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TrafficSignalComponent } from './components/traffic-signal/traffic-signal.component';
import { TimerComponent } from './components/timer/timer.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/reducers/counter';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TestComponent,
    UserDetailComponent,
    TrafficSignalComponent,
    TimerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  exports:[MaterialModule],
  providers: [HttpClientModule, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
  