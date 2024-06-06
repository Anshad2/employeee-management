import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

  employee:any

  constructor(private service:EmployeeService){

  this.ngOninit()
   

  }

  ngOninit(){

    this.service.getEmployee().subscribe(data=>this.employee=data)

  }

  
  handlDelete(id:any){

    this.service.deleteEmployee(id).subscribe(data=>{
      // console.log(data);

      this.ngOninit()
      
    })
  }
}
