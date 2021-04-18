import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }


  loginForm: any;


  buildForm = () => {
    this.loginForm = this._formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: 'U'
    })
  }

  login = (e: Event) => {
    e.preventDefault();
    this._loginService.login(this.loginForm.value).subscribe((res: any) => {
      const userDetails = res;
      localStorage.setItem('username', res.username);

      window.location.href = '/courses'

    })
  }


}
