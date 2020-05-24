import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { pro } from './pro';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  myForm: FormGroup;
  userName: AbstractControl;
  id: AbstractControl;
  chenji: AbstractControl;
  users$: Observable<pro>;
  baseUrl = 'http://127.0.0.1:8080/';
  currentUser: pro;
  modalRef: BsModalRef;
  bj: number;
  constructor(private fb: FormBuilder, private httpClient: HttpClient, private modalService: BsModalService) {
    this.myForm = this.fb.group({
      'userName': [''],
      'chenji': [''],
      'id': ['']
    });
    this.bj=1;
    this.id = this.myForm.controls['id'];
    this.userName = this.myForm.controls['userName'];
    this.chenji = this.myForm.controls['chenji'];
  }
  ngOnInit(): void {
    this.users$ = <Observable<pro>>this.httpClient.get(this.baseUrl + 'users');
  }
  
  tianjia()
  {
    this.bj=1;
  }

  bianji(){
    this.bj=0;
  }

  tz() {
    if (this.bj === 1)
      this.add();
    else this.update();
    this.bj=1;
  }

  search() {
    if (this.id.value) {
      this.httpClient.post(this.baseUrl + 'users/', this.id.value).subscribe(
        (val: any) => {
          if (!val.succ) {
            alert('学号不存在');
          } else
            this.users$ = <Observable<pro>>this.httpClient.get(this.baseUrl + 'users/' + this.id.value);
        });
    } else {
      this.users$ = <Observable<pro>>this.httpClient.get(this.baseUrl + 'users');
    }
  }

  add() {
    console.log(this.myForm.value);
    this.httpClient.post(this.baseUrl + 'user', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('添加成功!');
          this.ngOnInit();
        }
      });
  }

  select(u: pro) {
    this.currentUser = u;
    this.myForm.setValue(this.currentUser);
  }

  delete() {
    if (!this.currentUser) {
      alert('必须选择用户！');
    }
    else {
      this.httpClient.delete(this.baseUrl + 'user/' + this.currentUser.id).subscribe(
        (val: any) => {
          if (val.succ) {
            alert('删除成功！');
            this.ngOnInit();
          } else alert('删除失败');
        }
      )
    }
  }

  update() {
    if (!this.currentUser) {
      alert('必须选择用户！');
    }
    else {
      this.httpClient.put(this.baseUrl + 'user', this.myForm.value).subscribe(
        (val: any) => {
          if (val.succ) {
            alert('修改成功！');
            this.ngOnInit();
          } else alert('修改失败');
        }
      )
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
