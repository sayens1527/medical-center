export class Doctor {
    id:string;
    name:string;
    subsidiary:string;
    startDate:Date;
    salary:number;
    userName:string;
    password:string;
    
    

    constructor(id:string,name:string,subsidiary:string,startDate:Date ,salary:number,userName:string="",password:string=""){
        this.id = id;
        this.name = name;
        this.subsidiary = subsidiary;
        this.startDate = startDate;
        this.salary = salary;
        this.userName = userName;
        this.password = password;
    }
}
