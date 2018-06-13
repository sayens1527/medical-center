import { Component, OnInit, Input } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../model/doctor';
import { InputTypes } from '../../model/input-types';
import { SubsidiaryService } from '../../services/subsidiary.service';
import { FormConfiguration, FormInputConfiguration } from '../../components/formConfiguration';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  constructor(
    private doctorService:DoctorService,
    private subsidiaryService:SubsidiaryService
  ) { }


  @Input() doctor:Doctor;
  configuration:Map<string,FormInputConfiguration> = new Map<string,FormInputConfiguration>();
  formConfiguration:FormConfiguration = new FormConfiguration();

  ngOnInit() {
    this.configuration.set("id",new FormInputConfiguration("Identificacion",InputTypes.TEXT));
    this.configuration.set("name",new FormInputConfiguration("Nombre",InputTypes.TEXT));
    this.configuration.set("salary",new FormInputConfiguration("Sueldo",InputTypes.NUMBER));
    this.configuration.set("userName",new FormInputConfiguration("Nombre de Usuario",InputTypes.TEXT)); 
    this.configuration.set("password",new FormInputConfiguration("Clave",InputTypes.PASSWORD));
    this.configuration.set("subsidiary",new FormInputConfiguration("Sucursal",InputTypes.DROPDOWN,this.subsidiaryService.getAllActive()));
    this.configuration.set("startDate",new FormInputConfiguration("Fecha Ingreso",InputTypes.CALENDAR));
    this.formConfiguration.configuration = this.configuration;
    this.formConfiguration.floatLabel = false;
   }

   processEvenForm(event){
     alert(JSON.stringify(event));

     if(event.event === "cancel"){
       this.doctor === null;
     }
   }

}
