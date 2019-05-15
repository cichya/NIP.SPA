import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})

export class CoreModule { }
