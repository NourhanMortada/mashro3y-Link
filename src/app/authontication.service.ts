import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import{HttpHeaders} from '@angular/common/http';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
  isLogin = new BehaviorSubject(null);
   
   
  userName:string="";
  Token:any;
  data2:any;

  constructor (private _HttpClien: HttpClient){
     this.Token = localStorage.getItem('Token');
    let Data:any= localStorage.getItem('Data'); 
    this.data2 = localStorage.getItem("datatany");
  
    if (this.Token !== null) { 
    let userData: any = jwtDecode(this.Token);
    let clientdata:any = jwtDecode(this.Token);
    console.log(userData)
    console.log(clientdata)
     
      this.userName = Data;
    
    }
    this.isLogin.next(this.Token);
  }
  

  logIn(userData:any):Observable<any>{
    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
     'Content-Type': 'application/json'
    })
   
     return  this._HttpClien.post('https://mashro3ylink.com/api/v1/clients/auth/login', userData);
  }

  


AddLink(clientdata:any):Observable<any>{
  console.log("nono",clientdata);
  
    
  let httpheaders = new HttpHeaders({
    'Accept': 'application/json',
  'Content-Type' : 'application/json'
  
  })


  return this._HttpClien.post('https://mashro3ylink.com/api/v1/clients/links' ,  clientdata )
  

}
}


