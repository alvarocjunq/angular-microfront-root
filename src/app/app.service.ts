import { Injectable } from '@angular/core';
import { HttpService } from './$shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpService) { }

  getPersonById(id: number) {
    this.http.get(`https://swapi.co/api/people/${id}`);
  }
}
