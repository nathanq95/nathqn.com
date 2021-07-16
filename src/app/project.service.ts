import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any>('https://api.github.com/users/nathanq95/starred');
  }
}
