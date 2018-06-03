import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  exports:[DataTableComponent,FormComponent],
  declarations: [DataTableComponent, FormComponent],
  bootstrap:[DataTableComponent]
})
export class ComponentsModule { }
