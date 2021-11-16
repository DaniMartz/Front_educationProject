import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user, LoginDTO } from "../_models/log-in";
import { subject } from "../_models/materias";

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {
  apiRoute: string;
  constructor(private httpClient: HttpClient) { 
    this.apiRoute = 'https://backeducationproject.herokuapp.com';
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private httpAuthOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  public login(data){
    return this.httpClient.post<LoginDTO>(`${this.apiRoute}/auth/login`,JSON.stringify(data), this.httpOptions);
  }

  //SUBJECTS

  public getSubjects(){
    return this.httpClient.get<subject>(`${this.apiRoute}/subjects`, this.httpAuthOptions);
  }

  public createSubejct(id, data){
    return this.httpClient.post(`${this.apiRoute}/subjects${id}`, JSON.stringify(data), this.httpAuthOptions)
  }

  public updateSubejct(id, data){
    return this.httpClient.put(`${this.apiRoute}/subjects${id}`, JSON.stringify(data), this.httpAuthOptions)
  }

  //ASSIGNMENTS

  public getAssignments(){
    return this.httpClient.get(`${this.apiRoute}/subjects`, this.httpAuthOptions);
  }

  public createAssignment(id, data){
    return this.httpClient.post(`${this.apiRoute}/subjects${id}`, JSON.stringify(data), this.httpAuthOptions)
  }

  public updateAssignment(id, data){
    return this.httpClient.put(`${this.apiRoute}/subjects${id}`, JSON.stringify(data), this.httpAuthOptions)
  }
  
}
