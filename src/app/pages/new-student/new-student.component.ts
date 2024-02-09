import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit{
  disableSaveButton: boolean = false;
  sid: string | null | undefined;
  studentForm: FormGroup = this.formBuilder.group({
    fullName: [''],
    email: [''],
    gender: [''],
    phone: [''],
    level: [''],
    addresses: this.formBuilder.group({
        type: [''],
        state: [''],
        city: ['']
      })
  })

  constructor(private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sid = this.route.snapshot.paramMap.get('id');
    if(this.sid) { //If sid is not null, action is update/edit
      this.studentService.getStudentById(this.sid).subscribe((data: Student) => {
        this.studentForm.patchValue(data);
        this.studentForm.patchValue({addresses: data.addresses[0]}); //patching addresses value to first address
      })
    }
  }

  saveStudent(): void {
    let studentData = this.studentForm.value;
    let addresses = [];
    addresses.push({
      "type": this.studentForm.get('addresses.type')?.value,
      "state": this.studentForm.get('addresses.state')?.value,
      "city": this.studentForm.get('addresses.city')?.value,
    });
    studentData.addresses = addresses; // Assigning newly created address array to addresses property of studentData
    if(this.sid) { // udpating existing student
      this.studentService.updateStudent(this.sid, studentData).subscribe((result: string)=> {
        alert(result);
        this.router.navigate(['/home']);
      });
    } else { // adding new student 
    this.studentService.addStudent(studentData).subscribe((result: string)=> {
      alert(result);
      this.router.navigate(['/home']);
    });
  }
  }
}
