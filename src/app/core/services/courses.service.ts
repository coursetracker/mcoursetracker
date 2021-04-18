import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  getCourses = () => {
    return this.http.get(`https://coursetracker-courses.s3.ap-south-1.amazonaws.com/chainsys/courses.json`)
  }

}
