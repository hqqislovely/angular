import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { productsListComponent } from './products-list';
import { productDepartmentComponent } from './product-department';
import { productImageComponent } from './product-image';
import { productPriceComponent } from './product-price';
import { productRowComponent } from './product-row';



@NgModule({
  declarations: [//所以属于该模块的组件，必须在这里申明；若未申明，就不能使用或者使用出错
    AppComponent,
    productsListComponent,
    productDepartmentComponent,
    productImageComponent,
    productPriceComponent,
    productRowComponent

  ],
  imports: [//导入其他模块
    BrowserModule
  ],
  providers: [],//可注入对象的提供
  bootstrap: [AppComponent]//表示该模块启动的组件
})
export class AppModule { }
