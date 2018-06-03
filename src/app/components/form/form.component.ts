import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() detail:any;
  fields:string[];

  constructor() { }

  ngOnInit() {
    if(this.detail){
      this.fields = Object.keys(this.detail);
    }
  }

  getValue(key:string):any{
    return this.detail[key];
  }

  getType(key:string):any{
    return "text";
  }

}
