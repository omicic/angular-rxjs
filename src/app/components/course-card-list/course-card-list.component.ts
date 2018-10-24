import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.css']
})
export class CourseCardListComponent implements OnInit {

  @Input()
  courses: Course[];
  

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  editCourse(course: Course){
    const dialog =  new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialog);

  }

}
