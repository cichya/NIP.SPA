import { HomeService } from './home/home.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    CommonModule
  ],
  providers: [
    HomeService
  ]
})

export class CoreModule { }
