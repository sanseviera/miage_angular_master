import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { PageEvent } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {



  page:number=1;
  limit:number=10;
  totalDocs!:number;
  totalPage!:number;
  nextPage!:number;
  prevPage!:number;
  hasPrevPage!:boolean;
  hasNextPage!:boolean;

  assignments:Assignment[]=[];

  pageEvent!: PageEvent;

  assignmentSelectionne?: Assignment | null =null;


  constructor(private assignmentService:AssignmentsService){
    }



  ngOnInit(): void {
    this.assignmentService.getAssignmentsPagine(this.page, this.limit).subscribe(
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
    this.assignmentService.getAssignmentsPagine(this.page, this.limit).subscribe(
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


  getAssignments(){
    this.assignmentService.getAssignments()
        .subscribe((tableauAssignments)=>{
          this.assignments = tableauAssignments
        })
  }

  function(assignment: Assignment){
    this.assignmentSelectionne = assignment;
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

  applyFilter() {
    this.filterValue = false;
    this.assignments= this.assignments.filter((e)=>{return e.rendu==false});
  }



}
