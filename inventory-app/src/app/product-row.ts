import { Component } from "@angular/core";
import { Product } from './product';

@Component({
    selector: 'product-row',
    templateUrl: 'product-row.component.html',
    styleUrls: ['product-row.component.css'],
    inputs: ['product'],
    host: { class: 'row' }
})

export class productRowComponent {
    product: Product;
    constructor() {
    }
}