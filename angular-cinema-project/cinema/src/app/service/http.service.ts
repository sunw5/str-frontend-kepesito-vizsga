import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // BASE_URL = 'http://localhost:3000/movies';
  BASE_URL = 'https://nettuts.hu/jms/feladat/movies';

  constructor(private http: HttpClient) { }

  getMovieList():any {
    return this.http.get(this.BASE_URL)
  }

  deleteMovie(id):any {
    return this.http.delete(`${this.BASE_URL}/${id}`)
  }
}
