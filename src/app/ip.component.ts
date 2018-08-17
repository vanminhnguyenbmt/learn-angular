import { Component } from '@angular/core';
import { IpService } from './ip.service';
// import { Http } from '@angular/http';

@Component({
    selector: 'app-ip',
    template: '<h3>{{ ip }}</h3>',
    providers: [IpService]
})

export class IpComponent {
    ip: string;

    // constructor(private http: Http) {
    //     this.http.get('http://ip.jsontest.com/')
    //     .toPromise()
    //     .then(res => res.json())
    //     .then(resJson => this.ip = resJson.ip)
    //     .catch(err => console.log(err));
    // }

    constructor(private ipService: IpService) {
        this.ipService.getIp()
        .then(ip => this.ip = ip)
        .catch(err => console.log(err));
    }
}
