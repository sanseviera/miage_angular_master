import { Injectable, numberAttribute } from '@angular/core';
import { Auth } from '../auth.modele';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authData:Auth[] = [
    {
      nom: "admin",
      password: "123",
      statut:true,
    },
    {
      nom: "toto",
      password: "helloWorld",
      statut:false,
    },
    {
      nom: "soso",
      password: "31/12/2017",
      statut:false,
    },
  ];

  admin=false;
  loggedIn=false;


  logIn(name:String , mdp:String){
    let tmp:boolean = false;
    let i:number=0;
    for( i; i<this.authData.length ;i++){
      if(this.authData[i].nom===name && this.authData[i].password===mdp){
        tmp=true;
        if(this.authData[i].statut===true){
          this.admin=true;
        }

        this.loggedIn=true;
      }
    }
    if(!tmp){
      this.admin=false;
      this.loggedIn=false;
    }
  }

  logOut(){
    this.loggedIn = false;
  }

  isLogged(){
    const isUserLogged = new Promise(
      (resolve, reject)=>{
        resolve(this.loggedIn);
      }
    );
    return isUserLogged;
  }

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve, reject)=>{
        resolve(this.admin);
      }
    );
    return isUserAdmin;
  }

  setLogged(bool:boolean){
    this.loggedIn=bool;
  }

  setAdmin(bool:boolean){
    this.admin=bool;
  }

  constructor() { }
}
