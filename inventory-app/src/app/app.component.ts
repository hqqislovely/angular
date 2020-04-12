import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Chain Reactions',
        './assets/imgs/products/black-shoes.jpg',
        ['Women', 'Shoes', 'Aquazzura'],
        907.25),
      new Product(
        'NEATOJACKET',
        'ALEXANDER MCQUEEN',
        './assets/imgs/products/white-dress.jpg',
        ['Women', 'Clothing', 'Dress'],
        2457.56),
      new Product(
        'NICEHAT',
        'Jason',
        './assets/imgs/products/white-hat.jpg',
        ['Women', 'MAISON MICHEL', 'Hats'],
        387.32)
    ];

  }

  onProductSelected(product: Product) {
    console.log('在根组件中，响应产品:' + product.name + '选中事件！！');
  }

}

