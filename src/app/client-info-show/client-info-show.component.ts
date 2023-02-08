import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { AuthonticationService } from '../authontication.service';
@Component({
  selector: 'app-client-info-show',
  templateUrl: './client-info-show.component.html',
  styleUrls: ['./client-info-show.component.css']
})
export class ClientInfoSHowComponent {

  @ViewChild('fileInput') fileInput:any;
  

 
  


  LinksForm = new FormGroup({
    title:new FormControl("" ,[Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
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
  

  sendClientData(form:any){
   
    
   
}
   


  
  
  
 

 constructor(private _autho:AuthonticationService){
  

 }

 


     



 ngOnInit(): void {

 }

 
 
  

 }


