import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
function userNameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^a/)) {
    return { invalidUser: true }
  }
}

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  // 对应我们登录的表
  myForm: FormGroup;
  // 输入用户名的输入控件
  userName: AbstractControl;
  // 输入密码的输入控件
  password: AbstractControl;
  name$: Observable<string>;
  baseUrl = 'http://127.0.0.1:8080/';

  constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient, private router: Router) {
    // 创建表单
    this.myForm = this.fb.group(
      {
        'userName': ['admin', Validators.compose([Validators.required, userNameValidator])],
        'password': ['admin', Validators.compose([Validators.required, Validators.minLength(4)])]
      }
    );
    // 关联
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.name$ = this.userName.valueChanges;
    this.userName.valueChanges.subscribe(val => {
      // 可以在次实现自己的业务逻辑
      console.log(val);
    });


  }

  onSubmit(value: any) {
    console.log(value);
  }
  ngOnInit(): void {
  }
  login() {
    this.http.post(this.baseUrl + 'denglu', this.myForm.value).subscribe(
      (val: any) => {
        console.log(val);
        if (val.succ)
        {
          this.authService.login();
          this.router.navigate(['./management']);
          
        }else
        alert('账号或密码错误');
      });
  }
}


