import { Component, OnInit, Input} from '@angular/core';
import {AssignmentsComponent} from '../assignments/assignments.component';
import { Assignement } from '../assignments/assignment.model';
import { Output, EventEmitter } from '@angular/core';
import {Meta} from '../meta';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})

export class AddWorkComponent implements OnInit{


  ajoutActive=false;
  assignments = Meta.assignments;
  dateRendu?:Date;
  nomDevoir!:string;
  rendu!:boolean;
  

  ngOnInit(): void {
      setTimeout(()=>{
        this.ajoutActive=true;
      },200)
  }

  
  onSubmit(event:Event){

    const newAssignment = new Assignement()

    if(this.dateRendu!=null){
      newAssignment.nom = this.nomDevoir;
      newAssignment.dateDeRendu = this.dateRendu;
      newAssignment.rendu = true;
    }
    else{
      newAssignment.nom = this.nomDevoir;
      newAssignment.dateDeRendu = this.dateRendu;
      newAssignment.rendu = false;
    }

    console.log (event);
    Meta.add(newAssignment)
  }


}
