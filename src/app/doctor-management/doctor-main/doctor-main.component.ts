import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../model/doctor';

@Component({
  selector: 'app-doctor-main',
  templateUrl: './doctor-main.component.html',
  styleUrls: ['./doctor-main.component.css']
})
export class DoctorMainComponent implements OnInit {

  selectedDoctor:Doctor;

  constructor() { }

  ngOnInit() {
  }

  onDoctorSelect(doctor){
    this.selectedDoctor = doctor;
  }
}
