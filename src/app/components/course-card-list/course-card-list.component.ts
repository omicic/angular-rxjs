import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.css']
})
export class CourseCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  constructor() { }

  ngOnInit() {
  }

}
