import { Component, Type, ViewChild } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service'; 
import { Assignment, Matiere, Prof } from './assignments/assignment.model';
import { window } from 'rxjs';
import { AssignmentsComponent } from './assignments/assignments.component';
import * as loremIpsum from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion des devoirs (Assignments)';
  noms = "BORREANI Théo et BREZZO Jérémie";
  mdp:string="";
  nom:string="";
  opened = false;
  tmp:Assignment|null=null;
  hide: boolean = true;

  assignments=[];

  choice: string = "rendu et non rendu";
  choices: string[] = ['rendu', 'non rendu', 'rendu et non rendu'];
  // Recherche 
  recherche: String = "";

  constructor(
    public authService: AuthService,
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

  value2() {
    for(let i = 0 ;i<=1000; i++)
    {
    // Utilisez subscribe pour obtenir les données de l'Observable
    this.assignementsService.getAssignmentsPagine(1, 1, "", "").subscribe(
      assignments => {
        if (assignments && assignments.docs.length > 0) {
          // Récupérez le premier assignment
          const assignmentToDelete = assignments.docs[0];
  
          // Utilisez subscribe pour attendre la suppression de l'assignment
          this.assignementsService.deleteAssignment(assignmentToDelete).subscribe(
            (message) => {
              console.log(message);
              this.router.navigate(["home"]).then(() => {});;
            },
            (error) => {
              console.error("Erreur lors de la suppression de l'assignment :", error);
            }
          );
        } else {
          console.log("Aucun assignment à supprimer.");
        }
      },
      (error) => {
        console.error("Erreur lors de la récupération des assignments :", error);
      }
    );
    }
    location.reload();

  }

   getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  
  value3(){
    for(let i = 0 ;i<=1000; i++)
    {
    let tmp2 = [Prof.PROF_1,Prof.PROF_2,Prof.PROF_3]
    let tmp3=this.getRandomInt(3);

    const newAssignment = new Assignment();
    newAssignment.id= this.assignementsService.getNewId(),
    newAssignment.nom = loremIpsum.loremIpsum({count: 1})
    newAssignment.dateDeRendu = new Date( '2020-11-17'),
    newAssignment.rendu = [true,false][this.getRandomInt(2)];
    newAssignment.note = Math.ceil(Math.random() * 20);
    newAssignment.auteur = loremIpsum.loremIpsum({count: 2});
    newAssignment.matiere = Array(Matiere.GEOMETRIE, Matiere.LITTERATURE, Matiere.MATH)[this.getRandomInt(3)];
    newAssignment.prof =  tmp2[tmp3];
    newAssignment.remarques = loremIpsum.loremIpsum();

    this.assignementsService.addAssignment(newAssignment).subscribe((message)=>console.log(message)) ;
  }

  location.reload();

  }

  ngOnInit() {
    // permet de charger la donner persistente
    //this.authService.setAdmin(JSON.parse(localStorage.getItem('maVariable4') || '{}'));
    //this.authService.setLogged(JSON.parse(localStorage.getItem('maVariable5') || '{}'));
  }

  login(event:Event){
    event.preventDefault;
    this.authService.logIn(this.nom,this.mdp);
    console.log(this.authService.admin);
    this.nom = "";
    this.mdp = "";
    this.hide = true;
  }

  deconnexion(event:Event){
    event.preventDefault;

    this.authService.setAdmin(false);
    this.authService.setLogged(false);
    this.authService.logOut()
    
    console.log(this.authService.isLogged());

    location.reload();

  }

  
}
