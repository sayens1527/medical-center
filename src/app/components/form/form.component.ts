import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormConfiguration } from '../formConfiguration';
import { SelectItem } from 'primeng/components/common/selectitem';
import { element } from 'protractor';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() detail:any;
  @Input() formConfiguration:FormConfiguration;
  @Output() emmiter:EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup; 

  fields:string[];
  values:any[] = [];
  selected:string = "CEN";

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
    console.log("changeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    //if(this.detail){
      this.fields = Object.keys(this.detail);
      this.formGroup = new FormGroup({});
      this.values = [];
      this.fields.forEach(element => {
        let formControl:FormControl = new FormControl("",Validators.compose([Validators.required]));
        this.formGroup.setControl(element,formControl);
        this.values.push(this.detail[element]);
      });
    //}
  }

  getValue(key:string):any{
    return this.detail[key];
  }

  getValue2(key:string):any{
    return "detail."+key;
  }


  getType(key:string):any{
    if(this.formConfiguration.configuration.get(key)){
      return this.formConfiguration.configuration.get(key).inputType;
    }else{
      return "text";
    }
  }

  getLabel(key:string){
     if(this.formConfiguration.configuration.get(key)){
      return this.formConfiguration.configuration.get(key).labelName;
    }else{
      return "";
    }
  }

  getData(key:string){
    let items:any[] = this.formConfiguration.configuration.get(key).inputDataSource;
    let selecItems:SelectItem[] =items.map(element => {
      let item: SelectItem = {label:"",value:null};
      item.label= element.name;
      item.value = element.id;
      return item;  
    });
    return selecItems;
  }

  cancell(){
    alert("cancel");
    this.emmiter.emit({"event":"cancel"});
  }

}
