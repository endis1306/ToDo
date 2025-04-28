import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './src/app/app.routes';

@NgModule({
  imports: [
    CommonModule,          
    FormsModule,             
    ReactiveFormsModule,     
    HttpClientModule,
    RouterModule,
    RouterModule
  ],
  exports: [
    CommonModule,            
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideHttpClient(withFetch())  // Dodaj withFetch() do HttpClient
  ],
})
export class SharedModule {}
