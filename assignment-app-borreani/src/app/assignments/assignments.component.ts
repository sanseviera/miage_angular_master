import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {

  assignments:Assignment[]=[];
  constructor(private assignmentService:AssignmentsService){}

  ngOnInit(): void {
    this.getAssignments()
  }

  getAssignments(){
    this.assignmentService.getAssignments()
        .subscribe((tableauAssignments)=>{
          this.assignments = tableauAssignments
        })
  }

  assignmentSelectionne?: Assignment | null =null;
}
