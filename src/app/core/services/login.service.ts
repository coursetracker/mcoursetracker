import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }


  login = (userCred: any) => {
    const header = {
      org: 'spinsoft',
      application: 'knowledgetracker'
    }

    return this.http.post(`https://knowledgetracker-java-api.herokuapp.com/api/v1/auth/login`, userCred, {
      headers: header
    });
  }

}
