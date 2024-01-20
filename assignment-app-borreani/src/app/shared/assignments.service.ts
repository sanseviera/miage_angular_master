import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  url = "http://localhost:8010/api/assignments";
  constructor(private loggingService:LoggingService,private http:HttpClient ) { }

  id:number=3;

  assignments:Assignment[] = [];

  //getFirstAssignments():Observable<Assignment|null>{
  //  return this.http.get<Assignment[]>(this.url);    
  //}

  getAssignmentsPagine(page: number, limit: number) : Observable<any> {
    return this.http.get<any>(this.url + '?page=' + page + '&limit=' + limit);
  }

  getAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    return this.http.get<Assignment>(this.url+"/"+id)
  }

  getNewId():number{
    this.id=this.id+1;
    return this.id;
  }

  addAssignment(assignment:Assignment):Observable<any>{
    return this.http.post<Assignment>(this.url, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any>{
    return this.http.post<Assignment>(this.url, assignment);
  }
  
  deleteAssignment(assignment:Assignment):Observable<any>{
    this.loggingService.log(assignment.nom,"supprimé");
    return this.http.delete(this.url+"/"+assignment._id)

  }

}
