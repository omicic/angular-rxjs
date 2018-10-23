import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses/:id', component: CourseComponent },
  { path: "**", redirectTo: '/' } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
