import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { UsuarioModels } from '../models/usuario.model';
import { Observable } from 'rxjs';


 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
//usuario: UsuarioModels;
 Url:'http://localhost:3000/api';
  constructor(private http:HttpClient) { }



  getpersonas(){
    return this.http.get(`${this.Url}/rol`);
  }
  

  getPersona(id: string) {
    return this.http.get(`${this.Url}/rol/${id}`);
  }

  deletePersona(id: string) {
    return this.http.delete(`${this.Url}/rol/${id}`);
  }

  /*savepersona() {
    return this.http.post(`${this.Url}/games/${id}`);
  }*/

 /* updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.Url}/games/${id}`, updatedGame);
  }*/
}
