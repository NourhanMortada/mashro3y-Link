import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthonticationService } from './authontication.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token:any;
  dataaa:any;
   

 
  
  constructor(private _HttpClient:HttpClient , private _AuthonticationService:AuthonticationService) {
     this.token= localStorage.getItem('Token');
     let dataaa= this.token.data;
     
    
    
  }

  

  getAllLinks(){
    
    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'+this._AuthonticationService.Token,
      'Accept-Language': '{{lang_code}}'
    })

    return this._HttpClient.get('https://mashro3ylink.com/api/v1/clients/links' , {headers : httpheaders});
    
  }
   



 

   

    getOneLinkShow(id:number){
      let httpheaders = new HttpHeaders({
      'Accept':' application/json',
        'Content-Type': 'application/json' ,
        'Authorization': 'Bearer'+this._AuthonticationService.Token,
      'Accept-Language': '{{lang_code}}'
      })
      return this._HttpClient.get("https://mashro3ylink.com/api/v1/clients/links/"+id ,{headers : httpheaders});
    }


UpdateLink(clientdata:any, id:number):Observable<any>{
  return this._HttpClient.post('https://mashro3ylink.com/api/v1/clients/links/2', clientdata);
}
DeleteLink(id:number){
  return this._HttpClient.delete('https://mashro3ylink.com/api/v1/clients/links/:'+id);
}

logout(clientdata:any):Observable<any>{
  return this._HttpClient.post('https://mashro3ylink.com/api/v1/clients/auth/logout', clientdata);
}
}
