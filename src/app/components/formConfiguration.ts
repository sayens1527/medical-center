import { InputTypes } from "../model/input-types";

export class FormConfiguration {

    configuration:Map<String,FormInputConfiguration>
    floatLabel:boolean;
    constructor(){

    }
}

export class FormInputConfiguration{
    labelName:string;
    inputType:InputTypes;
    inputDataSource:any[];
    constructor(labelName:string,inputType:InputTypes,inputDataSource:any[]=null){
        this.labelName= labelName;
        this.inputType = inputType;
        this.inputDataSource = inputDataSource;
    }

}
