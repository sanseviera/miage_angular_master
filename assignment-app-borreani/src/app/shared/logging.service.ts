import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(assignmentName:String, action:String){
    console.log("Log: l'assignment "+assignmentName+" a été "+action)
  }
}
