import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-stdhome',
  templateUrl: './stdhome.component.html',
  styleUrls: ['./stdhome.component.css']
})
export class StdhomeComponent implements OnInit {
  clicked = false;
  student={
    fname:'',
    age:'',
    address:'',
    district:'',
    email:'',
    phno:'',
    dob:'',
    gender:'',
    quali:'',
    poy:'',
    skill:'',
    wstatus:'',
    techtrain:'',
    year:'',
    course:'',
    photo:''
  };
  constructor(private _router:Router,private route: ActivatedRoute,private studentService: StudentserviceService) { }

  ngOnInit(): void {
      this.studentService.viewProfiles().subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data));
      })   
    
  }
  viewProfile(student:any)
  {
    localStorage.setItem("viewStudentId", student._id.toString());
    this._router.navigate(['studenthome/stdhome/viewprofile']);
  }

  actionMethod(event: any) {
    event.target.disabled = true;
    this._router.navigate(['studenthome/stdhome/stdform']);
}
}
