import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,          
    FormsModule,             
    ReactiveFormsModule,     
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,            
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
})
export class SharedModule {}
