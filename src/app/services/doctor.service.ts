import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors:Doctor[]=[
    new Doctor("1","Alex Narvaez","SUR",new Date(),2000),
    new Doctor("2","Jose Nazate","CEN",new Date(),4000),
    new Doctor("3","Raul Santana","NOR",new Date(),2300)
  ]

  constructor() { }

  getAll(){
    return this.doctors;
  }

  getById(id:string){
    return this.doctors.find(e => e.id ===id);
  }
}
