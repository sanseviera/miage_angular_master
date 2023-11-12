import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private loggingService:LoggingService) { }

  id:number=3;

  assignments:Assignment[] = [
    {
      id: 1,
      nom: "TP1 Web Components à rendre",
      dateDeRendu: new Date( '2020-11-17'),
      rendu: true,
    },
    {
      id: 2,
      nom: "TP2 Angular à rendre",
      dateDeRendu: new Date('2020-12-13'),
      rendu: true,
    },
    {
      id: 3,
      nom: "Mini Projet Angular à rendre",
      dateDeRendu: new Date('2021-01-07'),
      rendu: false,
    },
  ];

  getFirstAssignments():Observable<Assignment|null>{
    if(this.assignments.length>0){
      return of(this.assignments[0]);
    }
    else{
      return of(null);
    }
    
  }

  getAssignments():Observable<Assignment[]>{
    return of(this.assignments);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    return of(this.assignments.find(ass=>(ass.id===id)));
  }

  getNewId():number{
    this.id=this.id+1;
    return this.id;
  }

  addAssignment(assignment:Assignment):Observable<String>{
    this.assignments.push(assignment);
    if(assignment.nom!=null){
      this.loggingService.log(assignment.nom,"ajouté");
    }
    return of("Assignment service: assignment ajouté");
  }

  updateAssignment(assignment:Assignment):Observable<String>{
    if(assignment.nom!=null){
      this.loggingService.log(assignment.nom,"modifié");
    }
    return of("Assignment service: assignment modifié");
  }
  
  deleteAssignment(assignment?:Assignment):Observable<String>{
    if(assignment!=null){
      let pos = this.assignments.indexOf(assignment);
      this.assignments.splice(pos,1);
      if(assignment.nom!=null){
        this.loggingService.log(assignment.nom,"supprimé");
      }
    }
    return of("Assignment service: assignment supprimé");
  }

}
