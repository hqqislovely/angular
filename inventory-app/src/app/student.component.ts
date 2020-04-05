import { Component, EventEmitter } from '@angular/core';


@Component({
    selector: 'student',
    inputs: ['name'],
    outputs: ['studentSelecten'],
    template: `
    <p (click)="onClicken()">{{name}}</p>
    `
})

export class Student {
    name: string;
    studentSelecten: EventEmitter<string>;

    constructor() {
        this.studentSelecten = new EventEmitter();

    }

    onClicken() {
        this.studentSelecten.emit(this.name);

    }
}