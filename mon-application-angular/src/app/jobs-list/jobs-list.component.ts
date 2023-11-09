import { Component } from '@angular/core';
import {AssignmentsComponent} from '../assignments/assignments.component';
import { Assignement } from '../assignments/assignment.model';
import { Output, EventEmitter } from '@angular/core';
import {Meta} from '../meta';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent {
  assignments = Meta.assignments; 

}
