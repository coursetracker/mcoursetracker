import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(
    private http: HttpClient
  ) { }


  getTopics = (id: string) => {
    return this.http.get(`https://coursetracker-courses.s3.ap-south-1.amazonaws.com/chainsys/${id}.json`)
  }


  getCompletedTopics = (courseId: string, name: any) => {
    return this.http.get(`https://knowledgetracker-java-api.herokuapp.com/api/v1/usercoursetopics/${courseId}/topics/${name}`)
  }

}
