import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JobRestService {
  constructor(private http: HttpClient) { }

  allJobs() {
    return this.http.get<string[]>('http://localhost:8080/jenkins')
  }
}
