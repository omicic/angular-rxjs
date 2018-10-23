import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, concat } from 'rxjs';
import { Lessons } from '../../models/lessons';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { createHttpObservable } from '../../services/util';
import { map, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
courseId: number;
course$: Observable<Course>;
lessons$: Observable<Lessons[]>;

@ViewChild('searchInput') input: ElementRef;

  constructor(private route:ActivatedRoute, private store: StoreService) { }

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
    this.course$ = this.store.selectCourseById(this.courseId);
  }

  ngAfterViewInit(){
   

    const searchLessons$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(search => this.loadLessons(search))
      );

      const initialLessons$ = this.loadLessons();

      this.lessons$ = concat(initialLessons$, searchLessons$);

  }

  loadLessons(search = ''): Observable<Lessons[]> {
    return createHttpObservable(
      `/api/lessons?courseId=${this.courseId}&pageSize=100&filter=${search}`)
      .pipe(
        map(res => res["payload"])
      );

  }
  

}
