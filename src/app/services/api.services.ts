import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl: string = 'http://localhost:3000/api/v1'; 

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    return localStorage.getItem('accessToken'); 
  }

  private createHeaders() {
    const token = this.getAuthToken(); 
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  get(endpoint: string): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, { headers }).pipe(
      catchError((error) => throwError(error))
    );
  }

  post(endpoint: string, body: any): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, body, { headers }).pipe(
      catchError((error) => throwError(error)) 
    );
  }

  async put<T>(endpoint: string, body: any) {
    const headers = this.createHeaders();
    return await this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, { headers }).toPromise();
  }

  async delete<T>(endpoint: string) {
    const headers = this.createHeaders();
    return await this.http.delete<T>(`${this.baseUrl}/${endpoint}`, { headers }).toPromise();
  }
}
