import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model'; 
import { AssignmentsService } from '../../shared/assignments.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {


  nomDevoir:String="";
  dateRendu?:Date ;

  constructor(private assignmentService:AssignmentsService, 
    private router:Router,
    private authService: AuthService,){}

  onSubmit(event:Event){
    event.preventDefault();
    const newAssignment = new Assignment();
    newAssignment.id= this.assignmentService.getNewId();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignmentService.addAssignment(newAssignment)
      .subscribe((message)=>console.log(message)) 
    
    // Si dessous on navigue
    this.router.navigate(['home'])
  }

  isAdmin(){
    return this.authService.admin; 
  }

  isLogged(){
    return this.authService.logIn;
  }

}
