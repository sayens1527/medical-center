import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { ComponentsModule } from '../components/components.module';
import { DoctorMainComponent } from './doctor-main/doctor-main.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [DoctorListComponent, DoctorMainComponent, DoctorDetailComponent],
  exports:[DoctorMainComponent]
})
export class DoctorManagementModule { }
