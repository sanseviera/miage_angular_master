import { Component, Type } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service'; 
import { Assignment } from './assignments/assignment.model';

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
    this.assignementsService.getFirstAssignments().subscribe(a=>this.tmp = a);
    if(this.tmp!=null){
      this.router.navigate(["assignment",this.tmp.id]);
    }
  }

  value2(){
    this.assignementsService.getFirstAssignments().subscribe(a=>this.tmp = a);
    if(this.tmp!=null){
      this.router.navigate(["assignment",this.tmp.id,"edit"]);
    }
  }
  
  value3(){
    var now = new Date();
    this.assignementsService.assignments.push(
      {
        id: this.assignementsService.getNewId(),
        nom: now.toString(),
        dateDeRendu: new Date( '2020-11-17'),
        rendu: false,
      }
    );
  }
  
}
