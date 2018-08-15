import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en = 'Hello';
    vn = 'Xin chào';
    imageUrl = 'https://v4.angular.io/assets/images/logos/angular/logo-nav@2x.png';
    forgot = false;

    toggleForgot() {
        this.forgot = !this.forgot;
    }
}
