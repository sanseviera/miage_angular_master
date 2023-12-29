import { Component, Type } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service'; 
import { Assignment } from './assignments/assignment.model';
import { window } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion des devoirs (Assignments)';
  nom = "BORREANI Théo";

  opened = false;
  tmp:Assignment|null=null;

  constructor(private authService: AuthService,
      private router:Router,
      private assignementsService: AssignmentsService,){}

  clicSurBouton(){
    this.opened=!this.opened;
  }

  value(){
    this.assignementsService.getAssignments().subscribe(a=>this.tmp = a[0]);
    if(this.tmp!=null){
      this.router.navigate(["assignment",this.tmp.id]);
    }
  }

  value2(){
    this.assignementsService.getAssignments().subscribe(a=>this.tmp = a[0]);
    if(this.tmp!=null){
      this.router.navigate(["assignment",this.tmp.id,"edit"]);
    }
  }
  
  value3(){
    var now = new Date();

    const newAssignment = new Assignment();
    newAssignment.id= this.assignementsService.getNewId(),
    newAssignment.nom = now.toString(),
    newAssignment.dateDeRendu = new Date( '2020-11-17'),
    newAssignment.rendu = false;

    this.assignementsService.addAssignment(newAssignment).subscribe((message)=>console.log(message)) ;

    
    this.router.navigate(['home']) .then(() => {
    
    //permet de créer une donnée persistante
    localStorage.setItem('maVariable4', JSON.stringify(this.authService.isAdmin()));
    localStorage.setItem('maVariable5', JSON.stringify(this.authService.isLogged()));

    location.reload();

    });

  }

  ngOnInit() {
    // permet de charger la donner persistente
    this.authService.setAdmin(JSON.parse(localStorage.getItem('maVariable4') || '{}'));
    this.authService.setLogged(JSON.parse(localStorage.getItem('maVariable5') || '{}'));
  }
  
}
