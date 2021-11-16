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

  public createSubejct(data){
    return this.httpClient.post(`${this.apiRoute}/subjects`, JSON.stringify(data), this.httpAuthOptions)
  }

  public updateSubejct(id, data){
    return this.httpClient.put(`${this.apiRoute}/subjects/${id}`, JSON.stringify(data), this.httpAuthOptions)
  }

  //ASSIGNMENTS

  public getAssignments(subject_id){
    return this.httpClient.get(`${this.apiRoute}/subjects/${subject_id}/assignments`, this.httpAuthOptions);
  }

  public getAssignment(subject_id, id){
    return this.httpClient.get(`${this.apiRoute}/subjects/${subject_id}/assignments/${id}`, this.httpAuthOptions);
  }

  public createAssignment(subject_id, data){
    return this.httpClient.post(`${this.apiRoute}/subjects/${subject_id}/assignments`, JSON.stringify(data), this.httpAuthOptions)
  }

  public updateAssignment(subject_id, id, data){
    return this.httpClient.put(`${this.apiRoute}/subjects/${subject_id}/assignments/${id}`, JSON.stringify(data), this.httpAuthOptions)
  }

  //GADES

  public getGrades(subject_id, assignment_id){
    return this.httpClient.get(`${this.apiRoute}/subjects/${subject_id}/assignments/${assignment_id}/grades`, this.httpAuthOptions)
  }

  public submitGrade(subject_id, assignment_id, data){
    return this.httpClient.post(`${this.apiRoute}/subjects/${subject_id}/assignments/${assignment_id}/submit`, JSON.stringify(data), this.httpAuthOptions)
  }
  
  public evaluateGrade(subject_id, assignment_id, data){
    return this.httpClient.put(`${this.apiRoute}/subjects/${subject_id}/assignments/${assignment_id}/evaluate`, JSON.stringify(data), this.httpAuthOptions)
  }

}
