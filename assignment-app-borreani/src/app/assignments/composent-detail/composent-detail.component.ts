import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment, MatiereImages, ProfImages } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-composent-detail',
  templateUrl: './composent-detail.component.html',
  styleUrl: './composent-detail.component.css'
})
export class ComposentDetailComponent implements OnInit {

    
  MatiereImages = MatiereImages; // Make MatiereImages accessible in the template
  ProfImages = ProfImages; // Make ProfImages accessible in the template


  constructor(private assignementsService: AssignmentsService,
              private route:ActivatedRoute,
              private router:Router,
              private authService: AuthService){}
  assignmentTransmis:Assignment|undefined|null  ;
  
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.assignementsService.getAssignment(id).subscribe(a=>this.assignmentTransmis = a);
  }

  onAssignmentRendu(){
    if(this.assignmentTransmis!=null){
      this.assignmentTransmis.rendu = true;

      this.assignementsService.updateAssignment(this.assignmentTransmis)
          .subscribe((reponse)=>{console.log("Réponse du serveur : "+reponse.message)});

      this.router.navigate(["home"]);

    }
  }

  onDeleteAssignmentBtnClick(){
    //if(this.assignmentTransmis!=null){
    //  this.deleteAssignment.emit(this.assignmentTransmis);
    //}
    if(this.assignmentTransmis!=null){
      this.assignementsService.deleteAssignment(this.assignmentTransmis).subscribe((message)=>console.log(message));
      this.assignmentTransmis=null;

      this.router.navigate(["home"]);
    }
    
  }

  onClickEdit(){
    this.router.navigate(['/assignment',this.assignmentTransmis?.id,'edit'],
                          {
                            queryParams: {
                              'nom':this.assignmentTransmis?.nom,
                              'date':this.assignmentTransmis?.dateDeRendu,
                              'auteur': this.assignmentTransmis?.auteur,
                              'matiere': this.assignmentTransmis?.matiere,
                              'prof': this.assignmentTransmis?.prof,
                              'note': this.assignmentTransmis?.note,
                              'remarques': this.assignmentTransmis?.remarques
                            },
                            fragment: 'edition'
                          });
}

  isAdmin(){
    return this.authService.admin; 
  }

  isLogged(){
    return this.authService.logIn;
  }
}
