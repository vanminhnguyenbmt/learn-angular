import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    formErrors = {
        'email': ''
    };
    formSuccess = {
        'status': false,
        'message': ''
    };
    formSubmitting = false;
    agree = false;
    recruiter = true;
    isRequired = true;

    constructor(public router: Router, private fb: FormBuilder) {
    }

    switchTab(check) {
        this.recruiter = check;
        this.isRequired = check;
        console.log('Recruiter: ' + this.recruiter);
        console.log('isRequired: ' + this.isRequired);
        console.log(this.registerForm);
        if (!check) {
            this.registerForm.controls['company'].setErrors(null);
            this.registerForm.controls['website'].setErrors(null);
            this.registerForm.controls['address'].setErrors(null);
        } else {
            this.registerForm.controls['company'].setErrors({ isRequired: true });
            this.registerForm.controls['website'].setErrors({ isRequired: true });
            this.registerForm.controls['address'].setErrors({ isRequired: true });
        }
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
            password: ['', [Validators.required]],
            passwordconfirm: ['', [Validators.required]],
            fullname: '',
            company: '',
            website: '',
            address: '',
            language: ['en', [Validators.required]],
            agree: false
        });
    }

    registerAction() {

        console.log(this.registerForm.value);
        // if(this.registerForm.value.password != this.registerForm.value.passwordconfirm) {
        //     console.log("false");
        // }
        // else {
        //     this.formSubmitting = true;
        //     this.authService.register(this.registerForm.value).subscribe((res) => {
        //         this.registerForm.setValue({email: ''});
        //         this.formSuccess = res;
        //         this.formErrors = {
        //             'email' : ''
        //         };
        //         this.formSubmitting = false;
        //     }, (HttpErrorResponse) => {
        //         this.formErrors = HttpErrorResponse.error.errors;
        //         this.formSuccess = {
        //             'status' : false,
        //             'message': ''
        //         };
        //     this.formSubmitting = false;
        //     });
        // }
    }

}