import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnercourses$: Observable<Course[]>;
  advancedcourses$: Observable<Course[]>;

  constructor(private storeservice: StoreService) { }

  ngOnInit() {
    const courses$ = this.storeservice.courses$;

    this.beginnercourses$ = this.storeservice.selectBeginnerCourses();
    this.advancedcourses$ = this.storeservice.selectAdvancedCourses();

  }

}
