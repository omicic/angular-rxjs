import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {MatSidenavModule, MatTabsModule, MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CoursesComponent,
    CourseCardListComponent,
    CourseDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
