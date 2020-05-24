import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { pro } from '../product-component/pro';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'app-user-management-componen',
    templateUrl: './user-management-componen.component.html',
    styleUrls: ['./user-management-componen.component.css']
})
export class UserManagementComponenComponent implements OnInit {

    myForm: FormGroup;
    userName: AbstractControl;
    password: AbstractControl;
    users$: Observable<User>;
    baseUrl = 'http://127.0.0.1:8080/';
    currentUser: pro;
    bj: number;
    modalRef: BsModalRef;
    constructor(private fb: FormBuilder, private httpClient: HttpClient, private modalService: BsModalService) {
        this.myForm = this.fb.group({
            'userName': [''],
            'password': [''],
        });

        this.userName = this.myForm.controls['userName'];
        this.password = this.myForm.controls['password'];
    }

    ngOnInit(): void {
        this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'admin');
    }

    tianjia() {
        this.bj = 1;
    }

    bianji() {
        this.bj = 0;
    }

    tz() {
        if (this.bj === 1)
            this.add();
        else this.update();
        this.bj = 1;
    }

    search() {
        console.log(this.myForm.value);
        if (this.userName.value) {
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'admin/' + this.userName.value);
        } else {
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'admin');
        }
    }

    add() {
        console.log(this.myForm.value);
        this.httpClient.post(this.baseUrl + 'admin', this.myForm.value).subscribe(
            (val: any) => {
                if (val.succ) {
                    alert('添加成功!');
                }
                this.ngOnInit();
            });
    }

    select(u: User) {
        this.currentUser = u;
        this.myForm.setValue(this.currentUser);
    }

    delete() {
        if (!this.currentUser) {
            alert('必须选择用户！');
        }
        else {
            this.httpClient.delete(this.baseUrl + 'admin/' + this.currentUser.id).subscribe(
                (val: any) => {
                    if (val.succ) {
                        alert('删除成功！');
                    }
                    this.ngOnInit();
                });
        }
    }

    update() {
        if (!this.currentUser) {
            alert('必须选择用户！');
        }
        else {
            this.httpClient.put(this.baseUrl + 'admin', this.myForm.value).subscribe(
                (val: any) => {
                    if (val.succ) {
                        alert('修改成功！');
                    }
                    this.ngOnInit();
                });
        }
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }

}
