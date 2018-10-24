import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Course } from '../models/course';
import { filter, map, tap  } from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import {createHttpObservable} from './util';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private subject = new BehaviorSubject<Course[]>([]);
  courses$: Observable<Course[]> = this.subject.asObservable();

  init(){
    const http$ = createHttpObservable('/api/courses');

    http$
      .pipe(
        tap(()=>console.log('HTTP request executed')),
        map(res=>Object.values(res['payload']))
      )
      .subscribe(courses => this.subject.next(courses));
      
  }

  selectBeginnerCourses() {
    return this.filterByCategory('BEGINNER');  
  }

  selectAdvancedCourses() {
    return this.filterByCategory('ADVANCED');
  }

  selectCourseById(courseId: number) {
    return this.courses$
      .pipe(
        map(courses => courses.find(course => course.id == courseId)),
        filter(course => !!course)
      );
  }

  saveCourses(id: number, value): Observable<any>{
    
    const courses = this.subject.getValue();
    const courseIndex = courses.findIndex(course=>course.id==id);
    const newCourses = courses.slice(0);
    newCourses[courseIndex] = {
      ...courses[courseIndex],
      ...value
    }

    this.subject.next(newCourses);

    return fromPromise(fetch(`/api/courses/${id}`,{
      method: 'PUT',
      body: JSON.stringify(value),
      headers: {
        'content-type': 'application/json'
      }
    }));
  }

  filterByCategory(category: string) {
    return this.courses$
      .pipe(
        map(courses => courses
          .filter(course => course.category == category))
      );   
  }
}
