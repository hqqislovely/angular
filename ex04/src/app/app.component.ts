import { Component } from '@angular/core';
import { MENUS, PRODUCT } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menus = MENUS;

  product = PRODUCT;

}
