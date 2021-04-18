import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from 'src/app/core/services/courses.service';

interface course {
  id: number,
  name: string,
  courses: subCourses[]
}

interface subCourses {
  "id": number,
  "code": string,
  "title": string,
  "organization": string,
  "status": string,
  "display_order": number,
  "no_of_topics": number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private _courseService: CoursesService
  ) { }

  _bookIcon = faBook
  courses: any;

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses = () => {
    this._courseService.getCourses().subscribe((res: any) => {
      this.courses = res?.categories;
    })
  }

}
