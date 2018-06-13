import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {CalendarModule} from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  exports:[DataTableComponent,FormComponent],
  declarations: [DataTableComponent, FormComponent],
  bootstrap:[DataTableComponent]
})
export class ComponentsModule { }
