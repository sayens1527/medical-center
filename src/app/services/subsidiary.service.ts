import { Injectable } from '@angular/core';
import { Subsidiary } from '../model/subsidiary';

@Injectable({
  providedIn: 'root'
})
export class SubsidiaryService {

  subsidiaries:Subsidiary[]=[
    new Subsidiary("NOR","NORTE",true),
    new Subsidiary("SUR","SUR",true),
    new Subsidiary("CEN","CENTRO",true)
  ];

  constructor() { }

  getAllActive(){
    return this.subsidiaries;
  }
}
