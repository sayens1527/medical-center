import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  constructor() { }

  doctor = {id:"3636",name:"Alex"};

  ngOnInit() {
  }

}
