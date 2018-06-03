import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors:any[]=[{id:"1",name:"Alx"}];
  columns:string[]=["id","name"];

  constructor() { }

  ngOnInit() {
  }

}
