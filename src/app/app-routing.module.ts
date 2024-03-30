import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },

  { path: 'test', component:TestComponent },
  { path: '**', component:SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
