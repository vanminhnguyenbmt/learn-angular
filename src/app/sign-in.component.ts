import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <input
                placeholder="Email"
                ngModel
                name="email"
                required
            >
            <p *ngIf="formSignIn.controls.email?.errors?.required">
                Email is required
            </p>
            <br><br>
            <input type="password" placeholder="Password" ngModel name="password">
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form>
    `
})


export class SignInComponent {
    onSubmit(formSignIn) {
        console.log(formSignIn);
        throw new Error('Form is invalid');
    }
}
