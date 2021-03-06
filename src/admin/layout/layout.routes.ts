import { Route, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', loadChildren:'admin/index/index.module#IndexModule' },
      { path: 'course', loadChildren:'admin/course/course.module#CourseModule' },
      { path: 'question/:course_name', loadChildren:'admin/question/question.module#QuestionModule' },
    ]
  }
];

export const ROUTES  = routes;