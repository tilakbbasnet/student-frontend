import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  studentList: Student[] | undefined;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(): void {
    this.studentService.getStudentList().subscribe((studentList: Student[]) => {
      this.studentList = studentList;
      this.studentList.map((student: Student) => {
        let formattedAddress = '[';
        student.addresses.forEach((address: Address) => {
          formattedAddress+='('+address.type.concat(', '+address.state).concat(', '+address.city)+')';
        });
        student.stringAddress = formattedAddress+']';
        formattedAddress = '';
      });
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe((result: string) => {
      if(result === 'success') {
        console.log('Student deleted successfully!!!!');
        this.getStudentList();
        alert('Student deleted successfully!');
      } else {
        alert('Student not deleted!');
      }
    })
  }
}
