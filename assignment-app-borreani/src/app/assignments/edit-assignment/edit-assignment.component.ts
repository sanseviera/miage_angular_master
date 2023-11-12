import { Component } from '@angular/core';
import { Assignment } from '../assignment.model'; 
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrl: './edit-assignment.component.css'
})
export class EditAssignmentComponent {

  assignment?: Assignment;

  constructor(private assignmentsService:AssignmentsService,
              private route:ActivatedRoute,
              private router:Router,
              private authService: AuthService,){}

  ngOnInit(): void{
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(ass => this.assignment = ass);
    
      const paramsHTTP = this.route.snapshot.queryParams;
      const fragment = this.route.snapshot.fragment;
      console.log('Query params :')
      console.log(paramsHTTP);
      console.log('Fragment :')
      console.log(fragment);

  }

  onSaveAssignment(event:Event){
    event.preventDefault;

    if(this.assignment!=null){
      this.assignmentsService.updateAssignment(this.assignment)
        .subscribe(message=>console.log(message));
    }

    this.router.navigate(['home']);
  }

  isAdmin(){
    return this.authService.admin; 
  }

  
}
