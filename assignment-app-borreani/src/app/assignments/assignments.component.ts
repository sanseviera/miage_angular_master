import { Component, OnInit,Inject, Input, NgModule } from '@angular/core';
import { Assignment, MatiereImages, Prof, ProfImages } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { PageEvent } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';



export interface DialogData {
  assignment: Assignment;
  imageUtility: any;
  imageUtility2: any;
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})

export class AssignmentsComponent implements OnInit {
  //variables pour pagination
  page:number=1;
  limit:number=10;
  totalDocs!:number;
  totalPage!:number;
  nextPage!:number;
  prevPage!:number;
  hasPrevPage!:boolean;
  hasNextPage!:boolean;
  //variable assignment
  assignments:Assignment[]=[];
  assignmentSelectionne?: Assignment | null =null
  //
  pageEvent!: PageEvent;
  // varianles pour les filtres, recherches, etc.
  // Selection
   choice: string = "rendu et non rendu";
  choices: string[] = ['rendu', 'non rendu', 'rendu et non rendu'];
  // Recherche 
  recherche: String = "";
  imageUtility: any =ProfImages;
  imageUtility2: any =MatiereImages;


  constructor(
    private assignmentService: AssignmentsService,
    public dialog: MatDialog,
    
  ) { }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(popup, {
        enterAnimationDuration,
        exitAnimationDuration,
        data: {assignment:this.assignmentSelectionne,imageUtility: ProfImages,imageUtility2: MatiereImages},
      });
    }   

  ngOnInit(): void {
    this.assignmentService.getAssignmentsPagine(this.page, this.limit, this.choice, this.recherche).subscribe(
      data => {
        this.assignments = data.docs;
        this.totalDocs = data.totalDocs;
        this.totalPage = data.totalPages;
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
        console.log("Données recues");
      }
    )
   
  }

  getAssignmentsPagine() {
    this.assignmentService.getAssignmentsPagine(this.page, this.limit, this.choice, this.recherche).subscribe(
      data => {
        this.assignments = data.docs;
        this.totalDocs = data.totalDocs;
        this.totalPage = data.totalPages;
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
        console.log("Données reçues");
      }
    );
  }


  function(assignment: Assignment){
    this.assignmentSelectionne = assignment;
    this.openDialog("ddd","ddd");
  }


  handlePageEvent(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    
    // Mise à jour de nextPage et prevPage en fonction de la pagination
    this.nextPage = this.page + 1;
    this.prevPage = this.page - 1;

    this.getAssignmentsPagine();
  }

  filterValue: boolean | null = null;


  f10(assignment:Assignment){
    return this.imageUtility[assignment.prof]
  }

  f12(assignment:Assignment){
    return this.imageUtility2[assignment.matiere]
  }


}

@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})


export class popup {

  maDate: Date = new Date();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<popup>,
  ){}

  fonction(params: any): string {
    if (params == null) {
      return "champ vide";
    } else {
      
      return  params;
    }
  }

  fonction2(params: any): string {
    if (params == null) {
      return "champ vide";
    } else {
      const date = new Date(params);
      
      return  date.getDay().toString() + "/" + date.getMonth().toString() + "/" + date.getFullYear().toString();
    }
  }
  


  
}