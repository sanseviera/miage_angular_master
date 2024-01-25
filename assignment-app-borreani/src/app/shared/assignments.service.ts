import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  url = "http://localhost:8010/api/assignments";
  constructor(private loggingService:LoggingService,private http:HttpClient ) { }


  assignments:Assignment[] = [];

  //getFirstAssignments():Observable<Assignment|null>{
  //  return this.http.get<Assignment[]>(this.url);    
  //}

  getAssignmentsPagine(page: number, limit: number, trie:String) : Observable<any> {
    let x = this.http.get<any>(this.url + '?page=' + page + '&limit=' + limit + '&trie=' + trie);
    return x;
  }

  getAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    return this.http.get<Assignment>(this.url+"/"+id)
  }

  getNewId():number{
    return Date.now();
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
