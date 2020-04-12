import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-price',
    template: `
    \${{price}}
  `
})

export class productPriceComponent {
    @Input() price: number;
    constructor() {
    }
}