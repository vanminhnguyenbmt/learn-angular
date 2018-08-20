import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (ngSubmit)="onSubmit(txtEmail);" #formSignIn="ngForm">
            <input
                placeholder="Email"
                ngModel
                #txtEmail="ngModel"
                name="email"
                required
                email
            >
            <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <p *ngIf="txtEmail.errors?.email">
                Email is not valid
            </p>
            <br><br>
            <input
                type="password"
                placeholder="Password"
                ngModel
                #txtPassword="ngModel"
                name="password"
                minlength="6"
                pattern
            >
            <br><br>
            <div ngModelGroup="subjects">
                <label><input type="checkbox" [ngModel]="false" name="NodeJS" /> NodeJS</label>
                <label><input type="checkbox" [ngModel]="false" name="Angular 4" /> Angular 4</label>
                <label><input type="checkbox" [ngModel]="false" name="ReactJS" /> ReactJS</label>
            </div>
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form>
        <p>{{ txtEmail.errors | json }}</p>
        <p>{{ txtPassword.errors | json }}</p>
        <p>{{ formSignIn.value | json }}</p>
    `
})


export class SignInComponent {
    onSubmit(formSignIn) {
        console.log(formSignIn);
        throw new Error('Form is invalid');
    }
}
