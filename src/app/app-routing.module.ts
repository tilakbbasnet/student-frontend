import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { NewStudentComponent } from './pages/new-student/new-student.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: StudentListComponent},
  { path: 'register', component: RegisterUserComponent },
  { path: 'new', component: NewStudentComponent},
  { path: 'update/:id', component: NewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
