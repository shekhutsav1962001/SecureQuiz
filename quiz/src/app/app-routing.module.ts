import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginStudentComponent } from './auth/login-student/login-student.component';
import { LoginTeacherComponent } from './auth/login-teacher/login-teacher.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetComponent } from './auth/reset/reset.component';
// import { IndexheaderComponent } from './index/indexheader/indexheader.component';

import { IndexmainComponent } from './index/indexmain/indexmain.component';
import { StudentGuard } from './student/student.guard';
import { TeacherGuard } from './teacher/teacher.guard';
import { AdminGuard } from './admin/admin.guard';
import { TempComponent } from './index/temp/temp.component';
import { TComponent } from './index/t/t.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { CreatequizComponent } from './teacher/createquiz/createquiz.component';
import { UploadquizComponent } from './teacher/uploadquiz/uploadquiz.component';
import { SeestudentsComponent } from './teacher/seestudents/seestudents.component';
import { AddquestionComponent } from './teacher/addquestion/addquestion.component';
import { IndexheaderComponent } from './index/indexheader/indexheader.component';
import { SeequestionComponent } from './teacher/seequestion/seequestion.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { NotfoundErrorComponent } from './error/notfound-error/notfound-error.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';
import { StudentComponent } from './admin/student/student.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { ViewQuestionComponent } from './admin/view-question/view-question.component';
import { CheatingComponent } from './error/cheating/cheating.component';
import { PlayquizComponent } from './student/playquiz/playquiz.component';

const routes: Routes = [
  // root
  { path: '', component: IndexmainComponent },
  // login register
  { path: 'teacher', component: LoginTeacherComponent },
  { path: 'student', component: LoginStudentComponent },
  //forgot password
  { path: 'reset', component: ResetComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password-done', component: ResetPasswordDoneComponent },
  // testing
  { path: 'a', component: TComponent },
  // { path: 't', component: CheatingComponent},
  // { path: 'b', component: IndexheaderComponent },
  // teacher
  { path: 'teacher/teacherhome', component: TeacherhomeComponent, canActivate: [TeacherGuard] },
  { path: 'teacher/createquiz', component: CreatequizComponent, canActivate: [TeacherGuard] },
  { path: 'teacher/uploadquiz', component: UploadquizComponent, canActivate: [TeacherGuard] },
  { path: 'teacher/seestudentes', component: SeestudentsComponent, canActivate: [TeacherGuard] },
  { path: 'teacher/addquestion', component: AddquestionComponent, canActivate: [TeacherGuard] },
  { path: 'teacher/seequestion', component: SeequestionComponent, canActivate: [TeacherGuard] },
  // student
  { path: 'student/studenthome', component: StudenthomeComponent,canActivate: [StudentGuard] },
  { path: 'student/playquiz', component: PlayquizComponent,canActivate: [StudentGuard]},
  // admin
  { path: 'admin/adminhome', component: AdminhomeComponent,canActivate: [AdminGuard] },
  { path: 'admin/viewstudent', component: StudentComponent,canActivate: [AdminGuard]},
  { path: 'admin/viewteacher', component: TeacherComponent,canActivate: [AdminGuard]},
  { path: 'admin/seequestion', component:ViewQuestionComponent ,canActivate: [AdminGuard]},
  // error
  { path: 'cheat', component: CheatingComponent },
  { path: 'error', component: ServerErrorComponent },
  { path: '**', component: NotfoundErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
