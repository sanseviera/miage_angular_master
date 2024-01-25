import { Component, OnInit } from '@angular/core';
import { Assignment, Matiere, Prof } from '../assignment.model'; 
import { AssignmentsService } from '../../shared/assignments.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent implements OnInit{


  matieres = Object.values(Matiere); // Convert the Matiere enum to an array
  profs = Object.values(Prof); // Convert the Prof enum to an array

  nomDevoir:String="";
  dateRendu?:Date ;
  auteur:String="";
  matiere!: Matiere; // Matière
  prof!: Prof; // Prof
  note!: number; // Note sur 20
  remarques!: string; // Remarques sur l'assignment

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  constructor(private assignmentService:AssignmentsService, 
    private router:Router,
    private authService: AuthService, private _formBuilder: FormBuilder){}


    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
          nom: ['', Validators.required],
          dateDeRendu: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
          auteur: ['', Validators.required],
          prof: ['', Validators.required],
          matiere: ['', Validators.required]
      });
      this.thirdFormGroup = this._formBuilder.group({
          note: ['', Validators.required],
          remarques: ''
      });
  }

  onSubmit(event:Event){
    event.preventDefault();
    const newAssignment = new Assignment();
    newAssignment.id= this.assignmentService.getNewId();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    newAssignment.auteur = this.auteur;
    newAssignment.matiere = this.matiere; // set the matiere
    newAssignment.prof = this.prof; // set the prof
    newAssignment.note = this.note; // set the note
    newAssignment.remarques = this.remarques; // set the remarques


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
