import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from './product';

@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css'],
    inputs: ['productsList']
})

export class productsListComponent {
    productsList: Product[];

    @Output() productSelected: EventEmitter<Product>;
    currentProduct: Product = null;

    constructor() {
        this.productSelected = new EventEmitter();
    }

    onProductClicked(product: Product) {
        this.currentProduct = product;
        console.log('product:' + product.name + 'is selected')
        this.productSelected.emit(product);
    }

    isSelected(product: Product) {
        if (this.currentProduct === null || product === null) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}

