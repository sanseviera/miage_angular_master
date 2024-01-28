import { Component, OnInit } from '@angular/core';
import { Assignment, Matiere, Prof } from '../assignment.model'; 
import { AssignmentsService } from '../../shared/assignments.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent implements OnInit{


  matieres = Object.values(Matiere); // Convert the Matiere enum to an array
  profs = Object.values(Prof); // Convert the Prof enum to an array

  nomDevoir:String="";
  dateRendu!:Date ;
  auteur:String="";
  matiere!: Matiere; // Matière
  prof!: Prof; // Prof
  note?: number; // Note sur 20
  remarques?: string; // Remarques sur l'assignment

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  newAssignment:Assignment =new Assignment();

  constructor(private assignmentService:AssignmentsService, 
    private router:Router,
    private authService: AuthService, private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ){}
    

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
          nom: ['', Validators.required],
          dateDeRendu: ['']
      });
      this.secondFormGroup = this._formBuilder.group({
          auteur: ['', Validators.required],
          prof: ['', Validators.required],
          matiere: ['', Validators.required]
      });
      this.thirdFormGroup = this._formBuilder.group({
          note: [''],
          remarques: ''
      });
  }

  onSubmit(event:Event){
    if(
      this.note == null ||  this.note<=20 && this.note>=0 
      
      ){
        if(this.note==null && this.dateRendu !=null){
          this.snackBar.open("erreur", ("On ne peut pas donner une date de rendu à un Assignment qui n'a pas été noté."), {
            duration: 2000, // Durée en millisecondes
          });
        }
        else{
          //event.preventDefault();
      this.newAssignment.id= this.assignmentService.getNewId();
      this.newAssignment.nom = this.nomDevoir;
      this.newAssignment.dateDeRendu = this.dateRendu;
      this.newAssignment.rendu = false;
      this.newAssignment.auteur = this.auteur;
      this.newAssignment.matiere = this.matiere; // set the matiere
      this.newAssignment.prof = this.prof; // set the prof
      this.newAssignment.note = this.note; // set the note
      this.newAssignment.remarques = this.remarques; // set the remarques
      this.assignmentService.addAssignment(this.newAssignment)
        .subscribe((message)=>console.log(message)) 
        
        // Si dessous on navigue
        this.router.navigate(['home'])
        }
    }else{
      this.snackBar.open("erreur", ("La note n'a pas une valleur accepté"), {
        duration: 2000, // Durée en millisecondes
      });
    }
  }

  isAdmin(){
    return this.authService.admin; 
  }

  isLogged(){
    return this.authService.logIn;
  }

}
