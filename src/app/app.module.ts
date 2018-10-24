import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {MatSidenavModule, MatSelectModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule, MatDatepickerModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from './components/course/course.component';
import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import {MatMomentDateModule} from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CourseComponent,
    CourseCardListComponent,
    CourseDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMomentDateModule
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]
})
export class AppModule { }
