import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { TopicsService } from 'src/app/core/services/topics.service';
import { find } from "lodash";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private _topicsService: TopicsService,
    private _route: ActivatedRoute
  ) { }

  _bookIcon = faBook
  courses: any;
  courseId: any;
  completedList: any;

  ngOnInit(): void {
    this.getTopicId();
  }

  getTopicId = () => {
    this._route.queryParamMap.subscribe((params) => {
      this.courseId = params.get('code');
    })
    this.getCourses();
    this.getCompletedTopics();
  }


  getCourses = () => {
    this._topicsService.getTopics(this.courseId).subscribe((res: any) => {
      this.courses = res;
    })
  }

  getCompletedTopics = () => {
    this._topicsService.getCompletedTopics(this.courseId, this.username).subscribe((res: any) => {
      this.completedList = res;
    })
  }

  get username() {
    return localStorage.getItem('username');
  }

  isCompleted = (topicId: string) => {
    const value = find(this.completedList, { topicId });
    if (value)
      return true;
    return false;
  }

}
