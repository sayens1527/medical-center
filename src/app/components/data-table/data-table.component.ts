import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() source:any[];
  @Input() columns:string[];
  @Input() tableTitle:string;
  @Input() newButtonLabel:string;
  @Input() showNewButton:boolean;

  @Output() emmiter:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
