import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-department',
    template: `
    <span *ngFor='let item of department;let i = index'>
      <a href='#'>{{item}}</a>
      <span>{{i < (department.length -1 ) ? '>' : ''}}</span>
    </span>
  `
})

export class productDepartmentComponent {
    @Input() department: String[];
    constructor() {
    }
}