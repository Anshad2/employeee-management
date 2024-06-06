import { Component } from '@angular/core';

import { FormControl,FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent {

  constructor(private service:EmployeeService,private route:Router){}

  employeeForm=new FormGroup({

    name :new FormControl("",Validators.required),
    number : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    department : new FormControl("",Validators.required),
    position : new FormControl("",Validators.required),
    salary : new FormControl("",Validators.required)
    
  })

  handleSubmit(){

    let formData=this.employeeForm.value

    console.log(formData);

    this.service.createEmployee(formData).subscribe(data=>{console.log(data)
    })

    this.route.navigateByUrl("")

    this.service.createEmployee(formData).subscribe(data=>{console.log(data)})
  
}

}