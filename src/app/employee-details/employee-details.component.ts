import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  employee:any

  constructor(private router:ActivatedRoute,private service:EmployeeService){

    let id = this.router.snapshot.params["id"]

    this.service.retrieveEmployee(id).subscribe(data=>{
      console.log(data);
      this.employee=data
    })
  

}
}
