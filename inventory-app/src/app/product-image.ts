import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-image',
    template: ' <img [src]="url" class="image-thumbnail">',
    styles: ['img{height: 17rem;width: 17rem;}']
})

export class productImageComponent {
    @Input() url: string;
    constructor() {
    }
}
