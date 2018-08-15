import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <!-- <button (click)="addForParent();">Add</button> -->
        <!-- <button (click)="subForParent();">Sub</button> -->
        <h3>{{ value }}</h3>
    `
})

export class ChildComponent {
    // @Output() myClick = new EventEmitter<boolean>();

    // addForParent() {
    //     this.myClick.emit(true);
    // }

    // subForParent() {
    //     this.myClick.emit(false);
    // }

    value = 0;
}
