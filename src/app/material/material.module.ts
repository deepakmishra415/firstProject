import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
