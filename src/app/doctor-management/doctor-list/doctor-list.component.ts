import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../model/doctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors:Doctor[];
  columns:string[]=["id","name","salary"];

  @Output() emmiter:EventEmitter<any> = new EventEmitter<any>();

  constructor(private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctors = this.doctorService.getAll();
  }

  onDoctorSelect(doctor){
    this.emmiter.emit(doctor);
  }

}
