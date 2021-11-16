import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user, LoginDTO } from "../_models/log-in";

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public login(data){
    return this.httpClient.post<LoginDTO>(`https://backeducationproject.herokuapp.com/auth/login`, JSON.stringify(data));
  }


  
}
