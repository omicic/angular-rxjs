import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { Course } from '../../models/course';
import { StoreService } from '../../services/store.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements AfterViewInit {

  form: FormGroup;
  course: Course;

  //@ViewChild(

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) course: Course, 
    private store: StoreService) {



      this.form = fb.group({
        description: [course.description, Validators.required],
        category: [course.category, Validators.required],
        releasedAt:[moment(), Validators.required],
        longDescription:[course.longDescription, Validators.required]

      });

      this.course = course;
     }

     ngAfterViewInit() {
   
    }

    closeDialog() {
      this.dialogRef.close();
    }

    save(){
      this.store.saveCourses(this.course.id, this.form.value)
        .subscribe(
          ()=>this.closeDialog(),
          err => console.log("Error saving course", err)
        );
    }



}
