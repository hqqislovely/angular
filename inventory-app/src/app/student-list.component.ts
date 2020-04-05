import { Component } from '@angular/core';

@Component({
    selector: 'student-list',
    template: `
    <student [name]="studentNames[0]" (studentSelecten)="onStudentSelecten($event)"></student>
    `
})

export class StudentList {
    studentNames = ['hyq', 'qqh', 'hqq'];

    constructor() {

    }

    onStudentSelecten(name: string) {
        console.log('选中了学生：' + name);
    }

}