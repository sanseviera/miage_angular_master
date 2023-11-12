import { Component } from '@angular/core';
import { AuthService } from '.././shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {

  mdp:string="";
  nom:string="";
  constructor(private authService: AuthService, private router:Router){}

  login(event:Event){
    event.preventDefault;
    this.authService.logIn(this.nom,this.mdp);
    console.log(this.authService.admin);
  }

}
