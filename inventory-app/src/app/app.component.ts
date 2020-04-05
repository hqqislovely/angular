import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  imgUrl: string;
  url: string;

  constructor() {
    this.title = 'hellohqq';
    this.imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585818717033&di=586586e4dcc36f682a15af62d1920944&imgtype=0&src=http%3A%2F%2Fimage.huahuibk.com%2Fuploads%2F20190107%2F21%2F1546866811-wczJFfBvDb.jpg';
    this.url = 'https://www.baidu.com';
  }

  onBtnClicked() {
    console.log('heiheihei');
  }

  onInput(evt: Event) {
    this.title = (<HTMLInputElement>evt.target).value;
  }
}

