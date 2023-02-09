import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit  {

  

  constructor(private  _ApiService:ApiService ,
    private __AuthonticationService:AuthonticationService,
    private _ActivatedRoute: ActivatedRoute, ){
      
     
    }

  userLogin: any;
  userName: any;
  title:any;

  // @ViewChild('fileInput') fileInput:any;
 

 
  


  LinksForm = new FormGroup({
    title:new FormControl("noso"),
    link: new FormControl(""),
    order:new FormControl(""),
    icon:new FormControl(""),
    icon_image:new FormControl(""),
    background_color:new FormControl(""),
    text_color:new FormControl(""),
    active_type_icon:new FormControl(""),
    custom_css:new FormControl(""),
    button_id:new FormControl(""),
    is_active:new FormControl(""),
  });


  
  Res:any;
userid:any;
userdetails:any;
value:any;
linkDetails:any;
Userid:any;


  AddClientData(form:any){
    
  
   
    
    this._ApiService.getOneLinkShow(this.Userid).subscribe({
    
      
      next: (data:any) => {
        
        console.log(data);
       
        
  
        this.linkDetails = data
        
        
        
        console.log("noora" ,this.Userid);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
   
   
       
    
    
        
    
    
  };
 

   


  
  
  
 

 

 


    



 ngOnInit(): void {
  this.__AuthonticationService.isLogin.subscribe({
    next: (newValue) => {
      this.userLogin = newValue;
      console.log('susbsribe run');
      this.userName = this.__AuthonticationService.userName;
    },

    
  });

   this._ApiService.getAllLinks().subscribe({
    
      
      next: (data:any) => {
        
        console.log(data);
       
        
  
        this.userdetails = data
        this.linkDetails=data.data
        
        
        console.log("noora" ,this.linkDetails);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
   


  
 

   
 }

 
 
  

 }


