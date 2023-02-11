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
    private _ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder
     ){
      
      
     
    }

  userLogin: any;
  userName: any;
  title:any;
  

  @ViewChild('fileInput') fileInput:any;
 

 
  


  LinksForm = new FormGroup({
    title:new FormControl(""),
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





  clickbutton(x:any){
    this._ApiService.getOneLinkShow(this.Userid)
      this.Userid=x;
       
        
        
        
      console.log("el-id" ,this.Userid);
    
  
  

  }
 

   


  
  reso:any;
  d:any;
  

  AddClientData(){
    let x =this.LinksForm;
    console.log(x)
    
    this._ApiService.AddLink(x.value).subscribe({
      next:(response:any)=>{
        
        this.linkDetails=response.data; 
        console.log("addlink", this.linkDetails)
      }
    }) 
  }
  


  
  sendClientData(form:any){
    
   



    // this.__AuthonticationService.AddLink(form.value).subscribe({
    //   next:(response:any)=>{
        

    //       this.reso=response;
    //       this.linkDetails=this.LinksForm;
    //       console.log(this.linkDetails.title)
        
    //     console.log(this.reso)
  
    //   }
  
    // })
  }

 

 


    



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
        
        
        // console.log("noora" ,this.linkDetails);
        
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this.LinksForm = this.fb.group({
    //   title:this.fb.control(''),
    //   link:this.fb.control('')
    // })
    
   
    
   


  
 

   
 }

 
 
  

 }


