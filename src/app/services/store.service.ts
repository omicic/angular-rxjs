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
  courses$: Observable<Course[]> = this.subject.asObservable();;

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

  filterByCategory(category: string) {
    return this.courses$
      .pipe(
        map(courses => courses
          .filter(course => course.category == category))
      );
    
  }







  /************* 

  createHttpObservable(url: string){
    return Observable.create(observer => {

      const controller = new AbortController();
      const signal = controller.signal;

      fetch(url, {signal})
        .then(response =>{
            if(response.ok){
              return response.json();
            } else {
              observer.error('Request faild with status code: ' + response.status);
            }
        })
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        });

        return () => controller.abort()

    });

  }*/





}
