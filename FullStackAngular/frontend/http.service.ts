import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs';  
import { map, catchError } from 'rxjs/operators';

// Nagłówki HTTP
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});

@Injectable({
  providedIn: 'root' 
})

export class HttpService {

  private apiUrl = 'http://localhost:3000/api/tutorials';  

  constructor(private http: HttpClient) {}

  // Metoda GET - Pobierz dane z API
  getOpublikowane(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/opublikowany`, { headers })  // Dodano nagłówki
      .pipe(
        map(response => {
          console.log('Otrzymana odpowiedź:', response);
          return response;
        }),
        catchError(error => {
          console.error('Wystąpił błąd:', error);
          return throwError(() => new Error('Błąd podczas pobierania danych.'));
        })
      );
  }

  // Metoda GET - Pobierz dane według tytułu
  getTutorialsByTytul(tytul: string): Observable<any> {
    console.log("tytuł: ", tytul);
    return this.http.get<any>(`${this.apiUrl}/findAll/${tytul}`, { headers }) 
      .pipe(
        map(response => response),
        catchError(error => {
            console.error('Wystąpił błąd przy pobieraniu tutorialu:', error);
            return throwError(() => new Error('Błąd przy pobieraniu tutorialu.'));
          })
      );
  }

  // Metoda GET - Pobierz dane według ID
  getTutorialById(id: string): Observable<any> {
    console.log("ID: ", id);
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers })  // Dodano nagłówki
      .pipe(
        map(response => (response == null)? []: [response]), // Używamy odpowiedzi z "data"
        catchError(error => {
          console.error('Wystąpił błąd przy pobieraniu tutorialu:', error);
          return throwError(() => new Error('Błąd przy pobieraniu tutorialu.'));
        })
      );
  }

  // Metoda POST - Dodaj tutorial
  postTutorial(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data, { headers })  // Dodano nagłówki
      .pipe(
        map(response => response)  
      );
  }

  // Metoda PUT - Zaktualizuj tutorial
  updateTutorial(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data, { headers })  // Dodano nagłówki
      .pipe(
        map(response => response)  
      );
  }

  // Metoda DELETE - Usuń tutorial
  deleteTutorial(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers })  // Dodano nagłówki
      .pipe(
        map(response => response)  
      );
  }
}
